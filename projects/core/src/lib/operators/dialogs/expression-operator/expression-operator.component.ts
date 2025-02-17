import {map, mergeMap, tap} from 'rxjs/operators';
import {BehaviorSubject, combineLatest, EMPTY, Observable, of} from 'rxjs';
import {AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ResultTypes} from '../../result-type.model';
import {RasterDataType, RasterDataTypes} from '../../datatype.model';
import {Layer, RasterLayer} from '../../../layers/layer.model';
import {geoengineValidators} from '../../../util/form.validators';
import {ProjectService} from '../../../project/project.service';
import {OperatorDict, SourceOperatorDict, UUID, WorkflowDict} from '../../../backend/backend.model';
import {RasterLayerMetadata} from '../../../layers/layer-metadata.model';
import {LetterNumberConverter} from '../helpers/multi-layer-selection/multi-layer-selection.component';
import {ExpressionDict} from '../../../backend/operator.model';
import {LayoutService, SidenavConfig} from '../../../layout.service';
import {SymbologyCreationType, SymbologyCreatorComponent} from '../../../layers/symbology/symbology-creator/symbology-creator.component';
import {RasterSymbology} from '../../../layers/symbology/symbology.model';

interface ExpressionForm {
    rasterLayers: FormControl<Array<RasterLayer> | undefined>;
    expression: FormControl<string>;
    dataType: FormControl<RasterDataType | undefined>;
    name: FormControl<string>;
    mapNoData: FormControl<boolean>;
    symbologyCreation: FormControl<SymbologyCreationType>;
}

/**
 * This dialog allows calculations on (one or more) raster layers.
 */
@Component({
    selector: 'geoengine-expression-operator',
    templateUrl: './expression-operator.component.html',
    styleUrls: ['./expression-operator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpressionOperatorComponent implements AfterViewInit {
    /**
     * If the list is empty, show the following button.
     */
    @Input() dataListConfig?: SidenavConfig;

    readonly RASTER_TYPE = [ResultTypes.RASTER];
    readonly form: FormGroup<ExpressionForm>;

    readonly outputDataTypes$: Observable<Array<[RasterDataType, string]>>;

    readonly rasterVariables$: Observable<Array<string>>;

    readonly fnSignature: Observable<string>;

    readonly lastError$ = new BehaviorSubject<string | undefined>(undefined);
    readonly projectHasRasterLayers$: Observable<boolean>;

    readonly loading$ = new BehaviorSubject<boolean>(false);

    @ViewChild(SymbologyCreatorComponent)
    readonly symbologyCreator!: SymbologyCreatorComponent;

    /**
     * DI of services and setup of observables for the template
     */
    constructor(
        protected readonly projectService: ProjectService,
        protected readonly layoutService: LayoutService,
    ) {
        this.form = new FormGroup<ExpressionForm>({
            rasterLayers: new FormControl<Array<RasterLayer> | undefined>(undefined, {
                nonNullable: true,
                validators: [Validators.required],
            }),
            expression: new FormControl<string>('    1 * A', {
                nonNullable: true,
                validators: [Validators.required],
            }),
            dataType: new FormControl(undefined, {
                nonNullable: true,
                validators: [Validators.required],
            }),
            mapNoData: new FormControl(false, {
                nonNullable: true,
                validators: [Validators.required],
            }),
            name: new FormControl('Expression', {
                nonNullable: true,
                validators: [Validators.required, geoengineValidators.notOnlyWhitespace],
            }),
            symbologyCreation: new FormControl(SymbologyCreationType.AS_INPUT, {
                nonNullable: true,
                validators: [Validators.required],
            }),
            // TODO: add unit related inputs
        });

        this.outputDataTypes$ = this.form.controls.rasterLayers.valueChanges.pipe(
            mergeMap((rasterLayers: Array<RasterLayer> | undefined) => {
                if (!rasterLayers) {
                    return EMPTY;
                }

                const metaData = rasterLayers.map((l) => this.projectService.getRasterLayerMetadata(l));
                return combineLatest(metaData);
            }),
            map((rasterLayers: Array<RasterLayerMetadata>) => {
                const outputDataTypes: Array<[RasterDataType, string]> = RasterDataTypes.ALL_DATATYPES.map((dataType: RasterDataType) => [
                    dataType,
                    '',
                ]);

                for (const output of outputDataTypes) {
                    const outputDataType = output[0];

                    const indices = rasterLayers
                        .map((layer, index) => (layer.dataType === outputDataType ? index : -1))
                        .filter((index) => index >= 0)
                        .map((index) => LetterNumberConverter.toLetters(index + 1));

                    if (indices.length > 0) {
                        output[1] = `(like ${indices.length > 1 ? 'layers' : 'layer'} ${indices.join(', ')})`;
                    }
                }
                return [rasterLayers, outputDataTypes] as [Array<RasterLayerMetadata>, Array<[RasterDataType, string]>];
            }),
            tap(([rasterLayers, outputDataTypes]: [Array<RasterLayerMetadata>, Array<[RasterDataType, string]>]) => {
                const dataTypeControl = this.form.controls.dataType;
                const currentDataType: RasterDataType | undefined = dataTypeControl.value;
                const rasterDataTypes = rasterLayers.map((layer) => layer.dataType);
                if (currentDataType && rasterDataTypes.includes(currentDataType)) {
                    // is already set at a meaningful type
                    return;
                }
                let selectedDataType: RasterDataType = currentDataType ? currentDataType : outputDataTypes[0][0]; // use default
                if (rasterDataTypes.length) {
                    selectedDataType = rasterDataTypes[0];
                }
                setTimeout(() => {
                    dataTypeControl.setValue(selectedDataType);
                });
            }),
            map(([_rasterLayers, outputDataTypes]: [Array<RasterLayerMetadata>, Array<[RasterDataType, string]>]) => outputDataTypes),
        );

        this.rasterVariables$ = this.form.controls.rasterLayers.valueChanges.pipe(
            map((rasterLayers: Array<RasterLayer> | undefined) => {
                if (!rasterLayers) {
                    return [];
                }

                return rasterLayers.map((_, index) => LetterNumberConverter.toLetters(index + 1));
            }),
        );

        this.fnSignature = this.rasterVariables$.pipe(map((vars: string[]) => `fn(${vars.join(', ')}) {`));

        this.projectHasRasterLayers$ = this.projectService
            .getLayerStream()
            .pipe(map((layers: Array<Layer>) => layers.filter((layer) => layer.layerType === 'raster').length > 0));
    }

    ngAfterViewInit(): void {
        setTimeout(() =>
            this.form.controls['rasterLayers'].updateValueAndValidity({
                onlySelf: false,
                emitEvent: true,
            }),
        );
    }

    /*
    ngOnDestroy(): void {
        // TODO: incorporate unit again
        // this.unitSubscription.unsubscribe();
    }
    */

    validateNoData(control: AbstractControl): ValidationErrors | null {
        if (!isNaN(parseFloat(control.value)) || control.value.toLowerCase() === 'nan') {
            return null;
        } else {
            return {
                error: true,
            };
        }
    }

    /**
     * Uses the user input and creates a new expression operator.
     * The resulting layer is added to the map.
     */
    add(): void {
        if (this.loading$.value) {
            return; // don't add while loading
        }

        const name: string = this.form.controls['name'].value;
        const dataType: RasterDataType | undefined = this.form.controls['dataType'].value;
        const expression: string = this.form.controls['expression'].value;
        const rasterLayers: Array<RasterLayer> | undefined = this.form.controls['rasterLayers'].value;
        const mapNoData: boolean = this.form.controls['mapNoData'].value;

        if (!dataType || !rasterLayers) {
            return; // checked by form validator
        }

        const sourceOperators = this.projectService.getAutomaticallyProjectedOperatorsFromLayers(rasterLayers);

        this.loading$.next(true);

        sourceOperators
            .pipe(
                mergeMap((operators: Array<OperatorDict | SourceOperatorDict>) => {
                    const workflow: WorkflowDict = {
                        type: 'Raster',
                        operator: {
                            type: 'Expression',
                            params: {
                                expression,
                                outputType: dataType.getCode(),
                                // TODO: make this configurable once units exist again
                                // outputMeasurement: undefined,
                                mapNoData,
                            },
                            sources: {
                                a: operators[0],
                                b: operators.length >= 2 ? operators[1] : undefined,
                                c: operators.length >= 3 ? operators[2] : undefined,
                                d: operators.length >= 4 ? operators[3] : undefined,
                                e: operators.length >= 5 ? operators[4] : undefined,
                                f: operators.length >= 6 ? operators[5] : undefined,
                                g: operators.length >= 7 ? operators[6] : undefined,
                                h: operators.length >= 8 ? operators[7] : undefined,
                            },
                        } as ExpressionDict,
                    };

                    return this.projectService.registerWorkflow(workflow);
                }),
                mergeMap((workflowId: UUID) => {
                    const symbology$: Observable<RasterSymbology> = this.symbologyCreator.symbologyForRasterLayer(
                        workflowId,
                        rasterLayers[0],
                    );
                    return combineLatest([of(workflowId), symbology$]);
                }),
                mergeMap(([workflowId, symbology]: [UUID, RasterSymbology]) =>
                    this.projectService.addLayer(
                        new RasterLayer({
                            workflowId,
                            name,
                            symbology,
                            isLegendVisible: false,
                            isVisible: true,
                        }),
                    ),
                ),
            )
            .subscribe({
                next: () => {
                    // everything worked well

                    this.lastError$.next(undefined);
                    this.loading$.next(false);
                },
                error: (error) => {
                    const errorMsg = error.error.message;

                    this.lastError$.next(errorMsg);
                    this.loading$.next(false);
                },
            });
    }

    goToAddDataTab(): void {
        if (!this.dataListConfig) {
            return;
        }

        this.layoutService.setSidenavContentComponent(this.dataListConfig);
    }
}
