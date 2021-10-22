import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubInformatiqueRouting } from './club-informatique-routing.module.ts.module';

import { ClubInformatiqueComponent } from './club-informatique.component';
import { GuessTheNumberComponent } from './projects/guess-the-number/guess-the-number.component';
import { SimpleClickCounterComponent } from './projects/simple-click-counter/simple-click-counter.component';
import { FormsModule } from '@angular/forms';
import { EquationSolverComponent } from './projects/equation-solver/equation-solver.component';
import { ChronometreComponent } from './projects/chronometre/chronometre.component';
import { CalculatorComponent } from './projects/calculator/calculator.component';
import { TicTacToeComponent } from './projects/tic-tac-toe/tic-tac-toe.component';
import { MemoryGameComponent } from './projects/memory-game/memory-game.component';

@NgModule({
  declarations: [
    ClubInformatiqueComponent,
    GuessTheNumberComponent,
    SimpleClickCounterComponent,
    EquationSolverComponent,
    ChronometreComponent,
    CalculatorComponent,
    TicTacToeComponent,
    MemoryGameComponent,
  ],
  imports: [CommonModule, ClubInformatiqueRouting, FormsModule],
})
export class ClubInformatiqueModule {}
