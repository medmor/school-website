import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-equation-solver',
    template: `
        <div class="container p-3">
            <div class="card shadow mt-5">
                <div class="card-header shadow">
                    <h2 class="card-title">Programme simple pour résoudre une équation du premier degré</h2>
                </div>
                <div class="card-body text-center">
                    <h1 class="my-5">
                        <input class="text-center" type="number" [(ngModel)]="a" placeholder="a">
                        X +
                        <input class="text-center" type="number" [(ngModel)]="b" placeholder="b">
                        = 0
                    </h1>
                    <h1 *ngIf="result" class="my-5">{{result}}</h1>
                    <div class="text-center my-2">
                        <button class="btn btn-dark" (click)="solve()">Résoudre</button>
                    </div>
                </div>
            </div>
        </div>
    `, styles: [
        `
          .card {
            max-width: 600px;
            margin: auto;
          }

          input {
            max-width: 200px;
          }
        `,
    ],
})

export class EquationSolverComponent implements OnInit {
    a: number | undefined;
    b: number | undefined;
    result: string | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

    solve() {
        if (this.a === undefined) {
            this.result = 'Veuillez entrez a!';
            return;
        }
        if (this.a === 0) {
            this.result = 'a ne peut pas être égale à 0!';
            return;
        }
        if (this.b === undefined) {
            this.result = 'Veuillez entrez b!';
            return;
        }
        if (this.a != undefined && this.b != undefined) {
            console.log(-this.b / this.a)
            this.result = `X = - ${this.b} / ${this.a} = ${(-this.b / this.a).toFixed(2)}`;
        }
    }
}