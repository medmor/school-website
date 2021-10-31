import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubInformatiqueComponent } from './club-informatique.component';
import { GuessTheNumberComponent } from './projects/guess-the-number/guess-the-number.component';
import { SimpleClickCounterComponent } from './projects/simple-click-counter/simple-click-counter.component';
import { EquationSolverComponent } from './projects/equation-solver/equation-solver.component';
import { ChronometreComponent } from './projects/chronometre/chronometre.component';
import { CalculatorComponent } from './projects/calculator/calculator.component';
import { TicTacToeComponent } from './projects/tic-tac-toe/tic-tac-toe.component';
import { MemoryGameComponent } from './projects/memory-game/memory-game.component';
import { MatchingGameComponent } from './projects/matching-game/matching-game.component';

const routes: Routes = [
    { path: '', component: ClubInformatiqueComponent },
    { path: 'guess-the-number', component: GuessTheNumberComponent },
    { path: 'simple-click-counter', component: SimpleClickCounterComponent },
    { path: 'equation-solver', component: EquationSolverComponent },
    { path: 'chronometre', component: ChronometreComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'tic-tac-toe', component: TicTacToeComponent },
    { path: 'memory-game', component: MemoryGameComponent },
    { path: 'matching-game', component: MatchingGameComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClubInformatiqueRouting {}
