import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavbarComponent } from './navbar.component';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, CollapseModule.forRoot(), BsDropdownModule.forRoot(), TranslateModule],
    exports: [NavbarComponent],
    declarations: [NavbarComponent],
})
export class NavbarModule {}
