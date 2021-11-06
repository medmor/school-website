import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HistoriqueComponent } from './historique.component';

@NgModule({
    declarations: [HistoriqueComponent],
    imports: [CommonModule, TranslateModule],
})
export class HistoriqueModule {}
