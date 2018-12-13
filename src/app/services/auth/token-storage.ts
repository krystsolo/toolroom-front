import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {

    constructor() {
    }

    public signOut() {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.clear();
    }

    public saveToken(token: string) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);

    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public isAuthenticated(): boolean {
        if (this.getToken() != null) {
            return true;
        } else {
            return false;
        }
    }

}
