import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-historique',
    template: `
        <div class="container">
            <h3 class="my-5">Page d'Historique en cours de construction</h3>
            <img src="assets/en-cours-de-preparation.jpg" alt="en cours de preparation" style="width: 100%">
        </div>
    `,
    styles: []
})
export class HistoriqueComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
