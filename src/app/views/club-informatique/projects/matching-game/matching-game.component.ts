import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-matching-game',
    template: `
        <div class="container">
            <div class="card mt-3">
                <div class="card-header">
                    <h2 class="card-title">Jeux de Tic Tac Toe</h2>
                    <div class="d-md-flex  justify-content-between">
                        <h4 *ngIf="gameState !== 'intro'">Erreurs : {{ errors }}</h4>
                        <div class="btn-group" *ngIf="gameState !== 'running'" btnRadioGroup [(ngModel)]="checkModel">
                            <label
                                    class="btn btn-warning"
                                    *ngFor="let btn of [4, 16, 36]"
                                    [btnRadio]="btn.toString()"
                                    (click)="fillCardsNumbers()"
                            >{{ btn }}</label
                            >
                        </div>
                        <button class="btn btn-primary float-end" (click)="restart()">
                            {{ gameState === 'intro' ? 'Commencer' : gameState === 'running' ? 'Stop' : 'Recommencer' }}
                        </button>
                    </div>
                </div>
                <div class="card-body" *ngIf="gameState === 'running'">
                    <div class="grid" [ngStyle]="gridStyleConfig()">
                        <div
                                class="cell"
                                *ngFor="let numb of cardsNumbers; let i = index"
                                (click)="cellClick(numb, i)"
                                [style.fontSize]="cellFontSize"
                        >
                            {{ numb }}
                            <div [id]="i" class="mask" *ngIf="displayMask(i, numb)"></div>
                        </div>
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

          .card-body {
            position: relative;
            width: 91%;
            padding-top: 95%;
          }

          .grid {
            width: 100%;
            height: 95%;
            position: absolute;
            top: 50%;
            left: 55%;
            transform: translate(-50%, -50%);
            display: grid;
            grid-column-gap: 2px;
            grid-row-gap: 2px;
            padding-right: 5px;
            padding-bottom: 5px;
          }

          .cell {
            position: relative;
            background-color: gainsboro;
            color: black;
            font-weight: bold;
            text-align: center;
            user-select: none;
            cursor: pointer;
          }

          .btn-group .btn {
            opacity: 0.5;
            margin: 0 !important;
          }

          .btn-group .active {
            opacity: 1;
          }

          .mask {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
          }
        `,
    ],
})
export class MatchingGameComponent implements OnInit {
    gameState: 'intro' | 'running' | 'gameover' = 'intro';
    checkModel = '4';
    cardsNumbers: number[] = [];
    cellFontSize = '100%';
    firstCard = {numb: -1, index: -1};
    secondCard = {numb: -1, index: -1};
    foundCards: number[] = [];
    errors = 0;

    constructor() {
    }

    ngOnInit(): void {
        this.fillCardsNumbers();
    }

    fillCardsNumbers() {
        this.cardsNumbers = [];
        const cellsPerColumn = Number(this.checkModel) / 2;
        for (let i = 0; i < cellsPerColumn; i++) {
            this.cardsNumbers.push(i);
        }
        for (let i = 0; i < cellsPerColumn; i++) {
            this.cardsNumbers.push(i);
        }
    }

    gridStyleConfig() {
        let v = 'vw'
        if (window.innerWidth > window.innerHeight) {
            v = 'vh'
        }
        const cellsPerColumn = Math.sqrt(Number(this.checkModel));
        const cellSize = 100 / cellsPerColumn;
        this.cellFontSize = 50 / cellsPerColumn + v;
        let gridTemplate = '';
        for (let i = 0; i < cellsPerColumn; i++) {
            gridTemplate += cellSize + '% ';
        }
        return {
            'grid-template-columns': gridTemplate,
            'grid-template-rows': gridTemplate,
        };
    }

    cellClick(numb: number, index: number) {
        if (!this.foundCards.includes(numb)) {
            if (this.firstCard.numb === -1) {
                this.firstCard.numb = numb;
                this.firstCard.index = index;
            } else if (this.secondCard.index === -1) {
                this.secondCard.numb = numb;
                this.secondCard.index = index;
                if (this.firstCard.numb === this.secondCard.numb) {
                    this.foundCards.push(this.firstCard.numb);
                    if (this.foundCards.length === Number(this.checkModel) / 2) {
                        setTimeout(() => {
                            this.restart();
                        }, 500)
                    }
                } else {
                    this.errors++;
                }
                setTimeout(() => {
                    this.firstCard.numb = this.firstCard.index = this.secondCard.numb = this.secondCard.index = -1;
                }, 500)
            }

        }
    }

    restart() {
        this.firstCard.numb = this.firstCard.index = this.secondCard.numb = this.secondCard.index = -1;
        this.foundCards = [];
        if (this.gameState === 'running') {
            this.gameState = 'gameover';
        } else {
            this.gameState = 'running';
        }
    }

    displayMask(i: number, numb: number) {
        return i !== this.firstCard.index && i !== this.secondCard.index && !this.foundCards.includes(numb);
    }
}
