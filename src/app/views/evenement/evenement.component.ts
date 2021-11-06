import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-evenement',
    template: ` <div class="container bg-white pt-1">
        <h3>{{ 'EVENEMENTS' | translate }}</h3>
        <img src="assets/en-cours-de-preparation.jpg" alt="en cours de preparation" style="width: 100%" />
    </div>`,
    styles: [],
})
export class EvenementsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
