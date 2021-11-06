import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReglementComponent } from './reglement.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [ReglementComponent],
    imports: [CommonModule, TranslateModule],
})
export class ReglementModule {}
