import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HistoriqueModule } from '../historique/historique.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HistoriqueModule],
})
export class HomeModule {}
