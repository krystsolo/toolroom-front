import {Injectable} from '@angular/core';
import decode from 'jwt-decode';
import {log} from 'util';
import {RoleEnum} from '../../models/roleEnum';

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
        return !!TokenStorage.getToken();
    }

    public static getLoggedUsername(): string {
        return sessionStorage.getItem(USERNAME);
    }

    public static getUserRoles(): Array<string> {
        log(decode(TokenStorage.getToken()).scopes);
        if (TokenStorage.getToken()) {
            return decode(TokenStorage.getToken()).scopes;
        }
        return new Array<string>();
    }

    public static hasUserRole(role: RoleEnum) {
        return TokenStorage.getUserRoles().indexOf(RoleEnum[role]) !== -1;
    }

}
