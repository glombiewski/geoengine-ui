import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ProjectService} from '../../project/project.service';
import {MapService} from '../map.service';
import {BehaviorSubject, combineLatestWith, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SpatialReferenceService} from '../../spatial-references/spatial-reference.service';

/**
 * The `geoengine-map-info` displays information about the visible map(s).
 */
@Component({
    selector: 'geoengine-map-info',
    templateUrl: 'map-info.component.html',
    styleUrls: ['map-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapInfoComponent {
    @Input()
    public bottom!: number;

    highPrecision: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private static readonly lowNumFractions = 2;
    private static readonly highNumFractions = 12;

    constructor(
        private mapService: MapService,
        private spatialReferenceService: SpatialReferenceService,
        private projectService: ProjectService,
    ) {}

    togglePrecision(): void {
        this.highPrecision.next(!this.highPrecision.getValue());
    }

    info(): Observable<string[]> {
        return this.projectService.getSpatialReferenceStream().pipe(
            map((srs) => this.spatialReferenceService.getOlProjection(srs).getUnits()),
            combineLatestWith(this.mapService.getViewportSizeStream()),
            map(([unit, viewport]) => {
                const numFractions = this.highPrecision.getValue() ? MapInfoComponent.highNumFractions : MapInfoComponent.lowNumFractions;

                const resolution = viewport.resolution.toFixed(numFractions);
                const xMin = this.prependPlusSign(viewport.extent[0].toFixed(numFractions));
                const xMax = this.prependPlusSign(viewport.extent[2].toFixed(numFractions));
                const yMin = this.prependPlusSign(viewport.extent[1].toFixed(numFractions));
                const yMax = this.prependPlusSign(viewport.extent[3].toFixed(numFractions));

                return [resolution, unit, xMin, yMin, xMax, yMax];
            }),
        );
    }

    private prependPlusSign(number: string): string {
        if (number.charAt(0) === '-') {
            return number;
        }
        return '+' + number;
    }
}
