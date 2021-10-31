import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-reglement',
    template: `
        <div class="container bg-white pt-1">
            <h3>Page de reglement en cours de construction</h3>
            <img src="assets/en-cours-de-preparation.jpg" alt="en cours de preparation" style="width: 100%">
        </div>
    `,
    styles: []
})
export class ReglementComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
