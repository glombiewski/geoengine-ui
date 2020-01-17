import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AbstractSymbology} from '../../../layers/symbology/symbology.model';
import {Layer} from '../../../layers/layer.model';
import {ParameterName, ParameterOption} from '../../operator-type-parameter-options.model';
import {ProjectService} from '../../../project/project.service';
import {ParameterValue} from '../../operator-type.model';

@Component({
    selector: 'wave-layer-list-workflow-parameter-slider',
    templateUrl: 'layer-list-workflow-parameter-slider.component.html',
    styleUrls: ['layer-list-workflow-parameter-slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})export class LayerListWorkflowParameterSliderComponent<L extends AbstractSymbology> implements OnChanges, OnInit {

    @Input() layer: Layer<L>;
    @Input() parameterName: ParameterName;

    _sliderRangeStart = 0;
    _sliderRangeStop = 0;
    _sliderRangeStep = 1;
    _sliderValue = 0;

    _parameterOptions: ParameterOption;
    _parameterValue: ParameterValue;

    constructor(
        public changeDetectorRef: ChangeDetectorRef,
        public projectService: ProjectService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (let propName in changes) { // tslint:disable-line:forin
            switch (propName) {
                case 'parameterName': {
                    // this._parameterName = this.parameterName;
                    this.changeDetectorRef.markForCheck();
                    break;
                }
                case 'layer': {
                    this.updateParameterOptions();
                    this.changeDetectorRef.markForCheck();
                    break;
                }
                default: {// DO NOTHING
                }
            }
        }
    }

    updateParameterOptions() {
        if (this.layer && this.layer.operator && this.layer.operator.operatorType && this.layer.operator.operatorTypeParameterOptions) {
            const pValue = this.layer.operator.operatorType.getParameterValue(this.parameterName);
            const pOption = this.layer.operator.operatorTypeParameterOptions.getParameterOption(this.parameterName);
            this._parameterValue = pValue;
            this._parameterOptions = pOption;
            this._sliderRangeStop = this._parameterOptions.optionCount();

        }
    }

    update(event: any) {
        const opTypeOptions = {};
        opTypeOptions[this.parameterName] = this._parameterOptions.optionsAsArray[this._sliderValue];
        const opTypeClone = this.layer.operator.operatorType.cloneWithOptions(opTypeOptions);
        const opClone = this.layer.operator.cloneWithOptions({
            operatorType: opTypeClone
        });
        this.projectService.changeLayer(this.layer, {
            operator: opClone,
            name: this._parameterOptions.displayValuesAsArray[this._sliderValue] // TODO: find a nicer way to do this
        });
    }

    ngOnInit(): void {
        this.updateParameterOptions();
    }


}
