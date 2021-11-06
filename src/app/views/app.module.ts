import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from './navbar/navbar.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HistoriqueModule } from './historique/historique.module';
import { ReglementModule } from './reglement/reglement.module';
import { EvenementsModule } from './evenement/evenement.module';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment.prod';

import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiReq = req.clone({ url: `/school-website/${req.url}` });
        return next.handle(apiReq);
    }
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        HomeModule,
        HistoriqueModule,
        ReglementModule,
        EvenementsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: environment.baseHref },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: APIInterceptor,
            multi: true,
        },
    ],
})
export class AppModule {}
