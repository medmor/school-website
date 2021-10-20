import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClubInformatiqueComponent} from "./club-informatique.component";
import {GuessTheNumberComponent} from "./projects/guess-the-number/guess-the-number.component";
import {SimpleClickCounterComponent} from "./projects/simple-click-counter/simple-click-counter.component";
import {EquationSolverComponent} from "./projects/equation-solver/equation-solver.component";
import {ChronometreComponent} from "./projects/chronometre/chronometre.component";

const routes: Routes = [
    {path: '', component: ClubInformatiqueComponent},
    {path: 'guess-the-number', component: GuessTheNumberComponent},
    {path: 'simple-click-counter', component: SimpleClickCounterComponent},
    {path: 'equation-solver', component: EquationSolverComponent},
    {path: 'chronometre', component: ChronometreComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ClubInformatiqueRouting {
}
