import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpService} from "./http-service";
import {HttpServiceInterceptor} from "./http-service-interceptor";

export function applicationHttpClientCreator(http: HttpClient) {
    return new HttpService(http);
}

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
    ],
    exports: [
        HttpClientModule,

    ],
    providers: [

        {
            provide: HttpService,
            useFactory: applicationHttpClientCreator,
            deps: [HttpClient]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpServiceInterceptor,
            multi: true,
        },
    ]
})
export class HttpModule {
}
