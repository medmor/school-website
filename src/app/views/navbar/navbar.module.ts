import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, CollapseModule.forRoot()],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class NavbarModule {}
