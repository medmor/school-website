import {Component, OnInit} from '@angular/core';
import {document} from "ngx-bootstrap/utils";

@Component({
    selector: 'app-tic-tac-toe',
    template: `
        <div class="container">
            <div class="card bg-success text-light mt-3">
                <div class="card-header">
                    <h2 class="card-title">Jeux de Tic Tac Toe</h2>
                </div>
                <div class="card-body" *ngIf="!gameCompleted">
                    <div *ngIf="!gameCompleted" class="grid" (click)="cellClick($event)">
                        <div *ngFor="let i of [0,1,2,3,4,5,6,7,8]" class="cell" [id]="i"></div>
                    </div>

                </div>
                <div class="text-center my-5" *ngIf="gameCompleted">
                    <h1 *ngIf="winner==='player'">You Win</h1>
                    <h1 *ngIf="winner==='computer'">You Lose</h1>
                    <button class="btn btn-primary" (click)="restart()">Recommencer</button>
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
            grid-template-columns: 33% 33% 33%;
            grid-template-rows: 33% 33% 33%;
            grid-column-gap: 2px;
            grid-row-gap: 2px;
          }

          .cell {
            background-color: azure;
            color: black;
            font-size: 8em;
            font-weight: bold;
            text-align: center;
            user-select: none;
            cursor: pointer;
          }
        `
    ]
})
export class TicTacToeComponent implements OnInit {

    grid = [['', '', ''], ['', '', ''], ['', '', '']];
    computerTurn = false;
    gameCompleted = false;
    winner: '' | 'player' | 'computer' = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    cellClick(e: any) {
        if (!this.computerTurn) {
            const index = e.target.id;

            const x = index % 3;
            const y = Math.floor(index / 3);

            if (this.grid[y][x] === '') {
                e.target.innerText = 'X';
                this.grid[y][x] = 'X';
                if (this.lineComplete('X')) {
                    setTimeout(() => {
                        this.gameCompleted = true;
                        this.winner = 'player';
                    }, 200)
                    return;
                }
            }
            this.computerTurn = true
            setTimeout(() => {
                this.playComputerTurn()
            }, 500)

        }
    }

    playComputerTurn() {
        for (let y = 0; y < this.grid.length; y++) {
            for (let x = 0; x < this.grid[y].length; x++) {
                if (this.grid[y][x] === '') {
                    this.grid[y][x] = 'O';
                    document.getElementById(x + 3 * y).innerText = 'O';
                    setTimeout(() => {
                        if (this.lineComplete('O')) {
                            this.gameCompleted = true;
                            this.winner = 'computer';
                        }
                        this.computerTurn = false;
                    }, 500)

                    return;
                }
            }
        }

    }

    restart() {
        this.grid = [['', '', ''], ['', '', ''], ['', '', '']];
        this.computerTurn = false;
        this.gameCompleted = false;
        this.winner = '';
    }

    lineComplete(c: string): boolean {
        if (
            this.grid[0][0] === c && this.grid[0][1] === c && this.grid[0][2] === c ||
            this.grid[1][0] === c && this.grid[1][1] === c && this.grid[1][2] === c ||
            this.grid[2][0] === c && this.grid[2][1] === c && this.grid[2][2] === c ||
            this.grid[0][0] === c && this.grid[1][0] === c && this.grid[2][0] === c ||
            this.grid[0][1] === c && this.grid[1][1] === c && this.grid[2][1] === c ||
            this.grid[0][2] === c && this.grid[1][2] === c && this.grid[2][2] === c ||
            this.grid[0][0] === c && this.grid[1][1] === c && this.grid[2][2] === c ||
            this.grid[0][2] === c && this.grid[1][1] === c && this.grid[2][0] === c
        ) {
            return true;
        }
        return false;
    }
}
