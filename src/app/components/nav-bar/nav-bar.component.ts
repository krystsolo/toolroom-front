import {Component, OnInit} from '@angular/core';
import {TokenStorage} from '../../services/auth/token-storage';
import {LoginService} from '../../services/auth/login.service';
import {Router} from '@angular/router';
import {RoleEnum} from '../../models/roleEnum';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    isLoggedIn = false;
    isAdmin = false;
    isWarehouseman = false;
    username = '';

    constructor(private token: TokenStorage, private loginService: LoginService, private router: Router) {
    }

    ngOnInit() {
        this.isLoggedIn = TokenStorage.isAuthenticated();
        if (!this.isLoggedIn) {
            this.router.navigate(['']);
        }
        this.isAdmin = this.hasUserAdminPermission();
        this.username = TokenStorage.getLoggedUsername();
        this.isWarehouseman = this.hasUserWarehousemanPermission();
    }

    logout() {
        this.loginService.logout();
        TokenStorage.signOut();
        location.reload();
    }

    toMainPage() {
        this.router.navigate(['dashboard']);
    }

    private hasUserAdminPermission(): boolean {
        return TokenStorage.hasUserRole(RoleEnum.ADMIN);
    }

    private hasUserWarehousemanPermission(): boolean {
        return TokenStorage.hasUserRole(RoleEnum.WAREHOUSEMAN);
    }
}

