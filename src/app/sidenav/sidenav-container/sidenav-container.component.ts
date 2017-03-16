import {
    Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewContainerRef, Type,
    ComponentRef, ComponentFactoryResolver, OnDestroy, ElementRef, Renderer, ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
import {SidenavRef} from '../sidenav-ref.service';
import {LayoutService} from '../../layout.service';
import {Subscription, Observable} from 'rxjs/Rx';

@Component({
    selector: 'wave-sidenav-container',
    templateUrl: './sidenav-container.component.html',
    styleUrls: ['./sidenav-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavContainerComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('target', {read: ViewContainerRef})
    target: ViewContainerRef;

    @ViewChildren('searchElements', {read: ViewContainerRef})
    searchElements: QueryList<ViewContainerRef>;

    searchTerm: string;

    componentRef: ComponentRef<Component>;

    private subscriptions: Array<Subscription> = [];

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                public sidenavRef: SidenavRef,
                public layoutService: LayoutService,
                private renderer: Renderer) {
    }

    ngOnInit() {
        this.subscriptions.push(
            this.sidenavRef.getCloseStream().subscribe(() => this.close())
        );
    }

    ngAfterViewInit() {
        this.subscriptions.push(
            Observable
                .combineLatest(
                    this.sidenavRef.getSearchComponentStream(),
                    this.searchElements.changes,
                    (elements, searchElementsQuery) => [elements, searchElementsQuery.first]
                )
                .subscribe(([elements, searchElements]: [Array<ElementRef>, ViewContainerRef]) => {
                    if (searchElements) {
                        searchElements.clear();
                    }
                    if (elements && searchElements) {
                        this.renderer.projectNodes(
                            searchElements.element.nativeElement,
                            elements.map(e => e.nativeElement)
                        );
                    }
                })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    load(type: Type<Component>, backButtonType?: Type<Component>) {
        this.sidenavRef.setTitle(undefined);
        this.sidenavRef.setBackButtonComponent(backButtonType);
        this.sidenavRef.removeSearch();
        this.searchTerm = '';

        if (this.componentRef) {
            this.target.clear();
            this.componentRef.destroy();
        }
        if (this.target && type) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
            this.componentRef = this.target.createComponent(componentFactory);
            setTimeout(() => this.componentRef.changeDetectorRef.markForCheck());
        }
    }

    close() {
        this.layoutService.setSidenavContentComponent(undefined);
    }

    back() {
        this.layoutService.setSidenavContentComponent(this.sidenavRef.getBackButtonComponent());
    }

}
