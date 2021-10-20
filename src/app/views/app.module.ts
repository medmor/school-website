import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReglementModule } from './reglement/reglement.module';
import { HistoriqueModule } from './historique/historique.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
