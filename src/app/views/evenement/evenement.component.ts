import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-evenement',
    template: `
        <div class="container">
            <h3 class="my-5">Page d'evenements en cours de construction</h3>
            <img src="assets/en-cours-de-preparation.jpg" alt="en cours de preparation" style="width: 100%">
        </div>`,
    styles: [],
})
export class EvenementsComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }
}
