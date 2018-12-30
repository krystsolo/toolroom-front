import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorage} from './token-storage';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient, private token: TokenStorage) {
    }

    attemptAuth(username: string, password: string) {
        const credentials = {username: username, password: password};
        const url = this.baseUrl + 'generate-token';

        console.log('auth Attempt');

        return this.http.post<any>(url, credentials);
    }

    logout() {
        const url = this.baseUrl + 'user/logout';

        return this.http.post<any>(url, '');
    }
}
