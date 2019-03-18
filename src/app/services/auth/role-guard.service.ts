import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {TokenStorage} from './token-storage';

@Injectable({
    providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

    constructor(public router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        const expectedRole = route.data.role;
        const roles = TokenStorage.getUserRoles();

        if (!TokenStorage.isAuthenticated() || roles.indexOf(expectedRole) === -1) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
