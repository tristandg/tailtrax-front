import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export interface IRequestOptions {
    headers?: HttpHeaders;
    observe?: 'body';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    body?: any;
}

export function applicationHttpClientCreator(http: HttpClient) {
    return new HttpService(http);
}


@Injectable()
export class HttpService {

    private schema = 'http://';
    //private domain = '13.59.235.46:3000';
    //private domain = '192.168.1.212:3000';
    private domain = '127.0.0.1:3000';
    private version = 'v1';


    // Extending the HttpClient through the Angular DI.
    public constructor(public http: HttpClient) {
        // if (!isDevMode()) {
        //   this.schema = 'http://';
        //   this.domain = '52.90.111.98';
        // }
    }

    public getAccessTokenHeader() {

        return {'Access-Token': window.localStorage.getItem('tailtrax-token')}
    }

    /**
     * Build API url.
     * @param url
     * @returns {string}
     */
    public getFullUrl(url: string): string {
        console.log(url);

        if (url.indexOf('http') >= 0) {
            return url;
        } else {
            return this.schema + this.domain + '/api/' + this.version + '/' + url;
        }
    }

    /**
     * GET request
     * @param {string} endPoint it doesn't need / in front of the end point
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.get<T>(this.getFullUrl(endPoint), options);
    }

    /**
     * POST request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public post<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.post<T>(this.getFullUrl(endPoint), params, options);
    }

    /**
     * PUT request
     * @param {string} endPoint end point of the api
     * @param {Object} params body of the request.
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public put<T>(endPoint: string, params: Object, options?: IRequestOptions): Observable<T> {
        return this.http.put<T>(this.getFullUrl(endPoint), params, options);
    }

    /**
     * DELETE request
     * @param {string} endPoint end point of the api
     * @param {IRequestOptions} options options of the request like headers, body, etc.
     * @returns {Observable<T>}
     */
    public delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
        return this.http.delete<T>(this.getFullUrl(endPoint), options);
    }
}
