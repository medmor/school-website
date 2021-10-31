import {Component, OnInit} from '@angular/core';

type colors = 'red' | 'green' | 'black' | 'orange';

@Component({
    selector: 'app-memory-game',
    template: `
        <div class="container">
            <div class="card mt-3">
                <div class="card-header">
                    <h2 class="card-title">Un simple jeux de mémoire</h2>
                    <p *ngIf="msg">{{ msg }}</p>
                </div>
                <div class="card-body" *ngIf="gameState === 'running'">
                    <div class="grid bg-white" [class.cursor-none]="choosingColor">
                        <div
                                *ngFor="let color of keys()"
                                [id]="color"
                                class="cell inactive"
                                [class.cursor-none]="choosingColor"
                                [class.active]="activeState(color)"
                                [class.hover]="hoverState(color)"
                                [style.background-color]="color"
                                (mousedown)="onMouseDown(color)"
                                (mouseup)="onMouseUp(color)"
                                (mouseenter)="onMouseEnter(color)"
                                (mouseleave)="onMouseLeave(color)"
                        ></div>
                    </div>
                </div>
                <div class="text-center my-5" *ngIf="gameState !== 'running'">
                    <h1 *ngIf="gameState === 'gameover'">Game Over; Votre score est : {{ sequence.length - 1 }}</h1>
                    <button class="btn btn-primary"
                            (click)="restart()">{{ gameState === 'intro' ? 'Commencer' : 'Recommencer' }}</button>
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
            padding: 1%;
            width: 100%;
            height: 95%;
            position: absolute;
            top: 50%;
            left: 55%;
            transform: translate(-50%, -50%);
            display: grid;
            grid-template-columns: 49% 49%;
            grid-template-rows: 49% 49%;
            grid-column-gap: 2%;
            grid-row-gap: 2%;
          }

          .cell {
            user-select: none;
            cursor: pointer;
          }

          .inactive {
            opacity: 0.4;
          }

          .hover {
            opacity: 0.7;
          }

          .active {
            opacity: 1;
          }

          .cursor-none {
            cursor: none;
          }
        `,
    ],
})
export class MemoryGameComponent implements OnInit {
    model = {
        red: {color: 'red', active: false, hover: false},
        green: {color: 'green', active: false, hover: false},
        black: {color: 'black', active: false, hover: false},
        orange: {color: 'orange', active: false, hover: false},
    };
    sequence: colors[] = [];
    playerSequence: colors[] = [];
    gameState: 'intro' | 'running' | 'gameover' = 'intro';
    choosingColor = false;
    sequenceIndex = 0;
    msg = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    playSequence() {
        setTimeout(() => {
            this.model[this.sequence[this.sequenceIndex]].active = true;
            setTimeout(() => {
                this.model[this.sequence[this.sequenceIndex]].active = false;
                this.sequenceIndex++;
                if (this.sequenceIndex < this.sequence.length) {
                    this.playSequence();
                } else {
                    this.sequenceIndex = 0;
                    this.choosingColor = false;
                    this.msg = 'Cliquez sur les couleurs dans le bon ordre';
                }
            }, 500);
        }, 500);
    }

    chooseRandomColor() {
        this.msg = 'Rappelez-vous la séquence';
        this.choosingColor = true;
        this.sequence.push(this.keys()[Math.floor(Math.random() * 4)]);
        this.playSequence();
    }

    keys(): colors[] {
        return Object.keys(this.model) as colors[];
    }

    onMouseDown(color: colors) {
        if (!this.choosingColor) {
            this.model[color].active = true;
            this.playerSequence.push(color);
            for (let i = 0; i < this.playerSequence.length; i++) {
                if (this.playerSequence[i] !== this.sequence[i]) {
                    this.gameState = 'gameover';
                    for (let c in this.model) {
                        (this.model as any)[c].active = false;
                        (this.model as any)[c].hover = false;
                    }
                    return;
                }
            }
        }
    }

    onMouseUp(color: colors) {
        if (!this.choosingColor) {
            this.model[color].active = false;
            if (this.playerSequence.length === this.sequence.length) {
                this.playerSequence = [];
                this.chooseRandomColor();
            }
        }
    }

    onMouseEnter(color: colors) {
        if (!this.choosingColor && this.gameState === 'running') {
            this.model[color].hover = true;
        }
    }

    onMouseLeave(color: colors) {
        if (!this.choosingColor) {
            this.model[color].hover = false;
            this.model[color].active = false;
        }
    }

    activeState(color: colors) {
        return this.model[color].active;
    }

    hoverState(color: colors) {
        return this.model[color].hover;
    }

    restart() {
        this.msg = '';
        this.sequenceIndex = 0;
        this.playerSequence = [];
        this.sequence = [];
        this.choosingColor = false;
        this.gameState = 'running';
        this.chooseRandomColor();
    }
}
