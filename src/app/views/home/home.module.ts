import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    imports: [CommonModule, BrowserModule, TranslateModule, CarouselModule],
    declarations: [HomeComponent],
})
export class HomeModule {}
