import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-simple-click-counter',
    template: `
        <div class="container p-3">
            <div class="card shadow mt-5">
                <div class="card-header shadow">
                    <h2 class="card-title">Clickez sur un button pour augmenter ou diminuer le conteur</h2>
                </div>
                <div class="card-body">
                    <div class="card-title text-center">
                        <h1 class="my-5">{{ counter }}</h1>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-dark" (click)="incrementCounter()">+</button>
                        <button class="btn btn-dark mx-3" (click)="decrementCounter()">-</button>
                        <button class="btn btn-dark" (click)="resetCounter()">Remettre à 0</button>
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
export class SimpleClickCounterComponent implements OnInit {
    counter = 0;

    constructor() {
    }

    ngOnInit(): void {
    }

    resetCounter() {
        this.counter = 0;
    }

    incrementCounter() {
        this.counter++;
    }

    decrementCounter() {
        this.counter--;
    }
}
