import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-calculator',
    template: `
        <div class="container p-3">
            <div class="card bg-success text-light shadow mt-2 p-2">
                <div class="card-header shadow mt-1">
                    <h2 class="card-title">Calculateur</h2>
                </div>
                <div class="card-body bg-dark bg-gradient text-light">
                    <div class="maindisplay">
                        <div class="subdisplay">{{ subDisplayText }}</div>
                        {{ mainDisplayText }}
                    </div>
                    <div class="mt-2">
                        <table class="table" style="width: 100%;">
                            <tr>
                                <td class="keys opkey" colspan="2" (click)="allClear()">AC</td>
                                <td class="keys opkey" colspan="1" (click)="clearLast()"><-</td>
                                <td class="keys opkey" colspan="1" (click)="pressKey('/')">/</td>
                            </tr>
                            <tr>
                                <td class="keys numkey" (click)="pressKey('7')">7</td>
                                <td class="keys numkey" (click)="pressKey('8')">8</td>
                                <td class="keys numkey" (click)="pressKey('9')">9</td>
                                <td class="keys opkey" (click)="pressKey('x')">x</td>
                            </tr>
                            <tr>
                                <td class="keys numkey" (click)="pressKey('4')">4</td>
                                <td class="keys numkey" (click)="pressKey('5')">5</td>
                                <td class="keys numkey" (click)="pressKey('6')">6</td>
                                <td class="keys opkey" (click)="pressKey('-')">-</td>
                            </tr>
                            <tr>
                                <td class="keys numkey" (click)="pressKey('3')">3</td>
                                <td class="keys numkey" (click)="pressKey('2')">2</td>
                                <td class="keys numkey" (click)="pressKey('1')">1</td>
                                <td class="keys opkey" (click)="pressKey('+')">+</td>
                            </tr>
                            <tr>
                                <td colspan="2" class="keys numkey" (click)="pressKey('0')">0</td>
                                <td class="keys numkey" (click)="pressKey('.')">.</td>
                                <td class="keys opkey" (click)="getAnswer()">=</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
          .card {
            margin: auto;
            max-width: 400px;
            height: 580px;
          }

          .maindisplay {
            height: 140px;
            font-size: 4rem;
            text-align: right;
          }

          .subdisplay {
            border-bottom: 1px solid white;
            height: 30%;
            font-size: 2rem;
          }


          .keys {
            height: 60px;
            width: 25%;
            font-size: 2rem;
            text-align: center;
            cursor: pointer;
            border: gray 1px solid;
          }

          .keys:hover {
            opacity: .9;
          }

          .ackey {
            color: red;
            background: orange;
          }

          .equalkey {
            color: white;
            background-color: orangered;
          }

          .numkey {
            color: skyblue;
            background-color: white;
          }

          .opkey {
            color: white;
            background-color: black;
          }
        `,
    ],
})
export class CalculatorComponent implements OnInit {
    subDisplayText = '';
    mainDisplayText = '';
    operand1: number | undefined;
    operand2: number | undefined;
    operator = '';
    calculationString = '';
    // This string  denotes the operation being performed
    answered = false;
    //  flag to check whether the solution has been processed
    operatorSet = false;

    ngOnInit() {
    }

    pressKey(key: string) {
        if (key === '/' || key === 'x' || key === '-' || key === '+') {
            const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
            if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
                this.operatorSet = true;
            }
            if ((this.operatorSet) || (this.mainDisplayText === '')) {
                return;
            }
            this.operand1 = parseFloat(this.mainDisplayText);
            this.operator = key;
            this.operatorSet = true;
        }
        if (this.mainDisplayText.length === 10) {
            return;
        }
        this.mainDisplayText += key;
    }

    allClear() {
        this.mainDisplayText = '';
        this.subDisplayText = '';
        this.operatorSet = false;
    }

    clearLast() {

    }

    getAnswer() {
        this.calculationString = this.mainDisplayText;
        this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);
        if (this.operand1 != undefined)
            if (this.operator === '/') {
                this.subDisplayText = this.mainDisplayText;
                this.mainDisplayText = (this.operand1 / this.operand2).toString();
                this.subDisplayText = this.calculationString;
                if (this.mainDisplayText.length > 9) {
                    this.mainDisplayText = this.mainDisplayText.substr(0, 9);
                }
            } else if (this.operator === 'x') {
                this.subDisplayText = this.mainDisplayText;
                this.mainDisplayText = (this.operand1 * this.operand2).toString();
                this.subDisplayText = this.calculationString;
                if (this.mainDisplayText.length > 9) {
                    this.mainDisplayText = 'ERROR';
                    this.subDisplayText = 'Range Exceeded';
                }
            } else if (this.operator === '-') {
                this.subDisplayText = this.mainDisplayText;
                this.mainDisplayText = (this.operand1 - this.operand2).toString();
                this.subDisplayText = this.calculationString;
            } else if (this.operator === '+') {
                this.subDisplayText = this.mainDisplayText;
                this.mainDisplayText = (this.operand1 + this.operand2).toString();
                this.subDisplayText = this.calculationString;
                if (this.mainDisplayText.length > 9) {
                    this.mainDisplayText = 'ERROR';
                    this.subDisplayText = 'Range Exceeded';
                }
            } else {
                this.subDisplayText = 'ERROR: Invalid Operation';
            }
        this.answered = true;
    }
}
