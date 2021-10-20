import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-calculator',
    template: `
        <div class="container p-3">
            <div class="card bg-success text-light shadow mt-5">
                <div class="card-header shadow">
                    <h2 class="card-title">Clickez sur un button pour augmenter ou diminuer le conteur</h2>
                </div>
                <div class="card-body">
                    <div class="card-title text-center">
                        <h1 class="my-5">{{ 8 }}</h1>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-dark">+</button>
                        <button class="btn btn-dark mx-3">-</button>
                        <button class="btn btn-dark">Remettre à 0</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
          .card {
            max-width: 600px;
            margin: auto;
          }

        `,
    ],
})
export class CalculatorComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
