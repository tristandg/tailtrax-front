import {Injectable, isDevMode} from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/observable/empty';

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('tailtrax-token');

        if (token != null) {

            if (isDevMode()) {

                console.log('Has Token!');
                console.log(token);

            }

            request = request.clone({
                setHeaders: {
                    'Access-Token': token,
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Cache-Control': 'no-cache',
                    'Cache-control': 'no-store',
                    'Expires': '0',
                    'Pragma': 'no-cache'
                }
            });

        } else {

            request = request.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Cache-Control': 'no-cache',
                    'Cache-control': 'no-store',
                    'Expires': '0',
                    'Pragma': 'no-cache'
                }
            });
        }

        return next.handle(request).do((event: HttpEvent<any>) => {

            if (event instanceof HttpResponse) {
                if (event.headers.get('Access-Token') != null) {
                    if (isDevMode()) {
                        console.log('NEW TOKEN SET: ' + event.headers.get('Access-Token'));
                    }
                    localStorage.setItem('tailtrax-token', event.headers.get('Access-Token'));
                }
            }

        }, (err: any) => {

            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {

                    localStorage.removeItem('tailtrax-token');

                }
                if (err.status === 422) {

                    // alert('Email already exists. Please enter another email.');
                }
                if (err.status === 405) {
                    // alert( 'Error submitting password request.' );
                }
            }
        });
    }
}
