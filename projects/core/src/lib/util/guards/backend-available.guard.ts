import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

import {Observable, map, catchError, of} from 'rxjs';
import {BackendService} from '../../backend/backend.service';

@Injectable({
    providedIn: 'root',
})
export class BackendAvailableGuard implements CanActivate {
    constructor(private readonly backendService: BackendService, private router: Router) {}

    canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const loggedInOrRedirect = this.backendService.getBackendInfo().pipe(
            map((_backendInfo) => true),
            catchError((err, _caught) =>
                of(this.router.createUrlTree(['/error', {error: 'Backend not available', errorDetails: err.message}])),
            ),
        );
        return loggedInOrRedirect;
    }
}
