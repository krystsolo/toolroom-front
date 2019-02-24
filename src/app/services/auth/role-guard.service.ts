import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {TokenStorage} from './token-storage';
import {log} from 'util';

@Injectable({
    providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

    constructor(public tokenStorage: TokenStorage, public router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {

        const expectedRole = route.data.role;
        const roles = this.tokenStorage.getUserRoles();

        if (!this.tokenStorage.isAuthenticated() || roles.indexOf(expectedRole) === -1) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
