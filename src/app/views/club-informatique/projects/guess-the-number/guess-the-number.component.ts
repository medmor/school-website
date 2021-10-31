import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-guess-the-number',
    template: `
        <div class="container p-3">
            <div class="card shadow mt-5">
                <div class="card-header shadow">
                    <h2 class="card-title">Devinez un nombre entre 0 et 10</h2>
                </div>
                <div class="card-body">
                    <input *ngIf="playing" class="form-control my-5" [(ngModel)]="guessedNumber"
                           placeholder="Entrer le nombre ici" type="number" min="0" max="10" step="1"/>
                    <button class="btn btn-dark float-end"
                            (click)="checkTheNumber()">{{ playing ? 'Vérifier' : 'Rejouer' }}</button>
                    <p *ngIf="playing">Nombre de tentatives : {{attemptsNumber}}</p>
                    <p>{{ result }}</p>
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
export class GuessTheNumberComponent implements OnInit {
    playing = false;
    numberToGuess = 0;
    guessedNumber: number | undefined = undefined;
    result = '';
    attemptsNumber = 0;

    constructor() {
    }

    ngOnInit(): void {
        this.generateRandomNumber();
    }

    checkTheNumber(): void {
        if (this.playing) {
            this.attemptsNumber++;
            if (this.numberToGuess === this.guessedNumber) {
                this.result = 'Bien jouer le nombre est : ' + this.guessedNumber;
                this.playing = false;
                this.guessedNumber = undefined;
            } else {
                this.result = 'Dommage! Essayez une autre fois';
            }
        } else {
            this.generateRandomNumber();
        }
    }

    generateRandomNumber() {
        if (!this.playing) {
            this.attemptsNumber = 0;
            this.result = ''
            this.numberToGuess = Math.floor(Math.random() * 11);
            this.playing = true;
        }
    }
}
