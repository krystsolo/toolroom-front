import {Component, OnInit} from '@angular/core';
import {TokenStorage} from '../../services/auth/token-storage';
import {LoginService} from '../../services/auth/login.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    isLoggedIn = false;

    constructor(private token: TokenStorage, private loginService: LoginService, private router: Router) {
    }

    ngOnInit() {
        this.isLoggedIn = TokenStorage.isAuthenticated();
        if (!this.isLoggedIn) {
            this.router.navigate(['']);
        }
    }

    logout() {
        this.loginService.logout();
        TokenStorage.signOut();
        location.reload();
    }
}

