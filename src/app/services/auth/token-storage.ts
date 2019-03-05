import {Injectable} from '@angular/core';
import decode from 'jwt-decode';
import {log} from 'util';
import {Role} from '../../models/role';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {

    constructor() {
    }

    public signOut() {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.clear();
    }

    public saveToken(token: string) {
        sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public isAuthenticated(): boolean {
        return this.getToken() != null;
    }

    public getUserRoles(): Array<string> {
        log(decode(this.getToken()).scopes);
        return decode(this.getToken()).scopes;
    }

    public hasUserRole(role: Role) {
        return this.getUserRoles().indexOf(Role[role]) !== -1;
    }

}
