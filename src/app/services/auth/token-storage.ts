import {Injectable} from '@angular/core';
import decode from 'jwt-decode';
import {log} from 'util';
import {Role} from '../../models/role';

const TOKEN_KEY = 'AuthToken';
const USERNAME = 'Username';

@Injectable()
export class TokenStorage {

    constructor() {
    }

    public static signOut() {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(USERNAME);
        sessionStorage.clear();
    }

    public static saveTokenAndUsername(token: string, username: string) {
        sessionStorage.setItem(TOKEN_KEY, token);
        sessionStorage.setItem(USERNAME, username);
    }

    public static getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public static isAuthenticated(): boolean {
        return TokenStorage.getToken() != null;
    }

    public static getLoggedUsername(): string {
        return sessionStorage.getItem(USERNAME);
    }

    public static getUserRoles(): Array<string> {
        log(decode(TokenStorage.getToken()).scopes);
        return decode(TokenStorage.getToken()).scopes;
    }

    public static hasUserRole(role: Role) {
        return TokenStorage.getUserRoles().indexOf(Role[role]) !== -1;
    }

}
