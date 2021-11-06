import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvenementsComponent } from './evenement.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [EvenementsComponent],
    imports: [CommonModule, TranslateModule],
})
export class EvenementsModule {}
