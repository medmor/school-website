import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
    selector: 'app-chonometre',
    template: `
        <div class="container p-3">
            <div class="card shadow mt-5">
                <div class="card-header shadow">
                    <h2 class="card-title">Chronomètre</h2>
                </div>
                <div class="card-body text-center">
                    <p class="my-5" style="font-size: 3em;font-weight:bold;">{{ timerDisplay }}</p>
                    <div class="text-center my-2">
                        <button class="btn btn-dark" (click)="startTimer()">Start</button>
                        <button class="btn btn-dark mx-2" (click)="stopTimer()">Stop</button>
                        <button class="btn btn-dark" (click)="resetTimer()">Reset</button>
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
export class ChronometreComponent implements OnInit {
    timerSubscription: Subscription | undefined = undefined;
    ms = 0;
    timerDisplay = '00 : 00 : 00';

    constructor() {}

    ngOnInit() {}

    startTimer() {
        if (this.timerSubscription === undefined) {
            this.timerSubscription = timer(0, 10).subscribe((ec) => {
                this.ms++;
                this.timerDisplay = this.getDisplayTimer(this.ms);
            });
        }
    }

    stopTimer() {
        this.timerSubscription?.unsubscribe();
        this.timerSubscription = undefined;
    }

    resetTimer() {
        this.stopTimer();
        this.ms = 0;
        this.timerDisplay = this.getDisplayTimer(this.ms);
    }

    getDisplayTimer(ms: number) {
        const fracts = Math.floor(ms % 100);
        const seconds = Math.floor(ms / 100) % 60;
        const minuts = Math.floor(ms / (100 * 60)) % 60;
        const hours = Math.floor(ms / (100 * 60 * 60));

        const disp =
            '' +
            (hours > 0 ? hours + ' : ' : '') +
            (minuts < 10 ? '0' + minuts : minuts) +
            ' : ' +
            (seconds < 10 ? '0' + seconds : seconds) +
            ' : ' +
            (fracts < 10 ? '0' + fracts : fracts);

        return disp;
    }
}
