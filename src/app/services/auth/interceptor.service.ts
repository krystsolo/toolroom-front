import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {
    HttpErrorResponse,
    HttpHandler,
    HttpHeaderResponse, HttpInterceptor,
    HttpProgressEvent,
    HttpRequest,
    HttpResponse,
    HttpSentEvent,
    HttpUserEvent
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {TokenStorage} from './token-storage';

const TOKEN_HEADER_KEY = 'Authorization';
const TOKEN_PREFIX = 'Bearer ';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

    constructor(private token: TokenStorage, private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {


        if (this.token.getToken() != null) {
             req = req.clone({headers: req.headers.set(TOKEN_HEADER_KEY, TOKEN_PREFIX + this.token.getToken())});
            console.log('authReq with token: ' + this.token.getToken());
        }
       // const token: string = localStorage.getItem('token');
        // console.log(token);
        // if (token) {
        //     req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        // }

        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        return next.handle(req).pipe(
            tap(
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        console.log(err);
                        console.log('req url :: ' + req.url);
                        if (err.status === 401) {
                            this.token.signOut();
                            this.router.navigate(['']);
                        }
                    }
                }
            ));
    }
}
