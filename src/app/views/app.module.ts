import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NavbarModule} from './navbar/navbar.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {appInitializer} from "../core/helpers";
import {AccountService} from "../core/services";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NavbarModule, HttpClientModule],
    providers: [{provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService]}],
    bootstrap: [AppComponent],
})
export class AppModule {
}
