import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EvenementsComponent} from './evenement/evenement.component';
import {HistoriqueComponent} from './historique/historique.component';
import {HomeComponent} from './home/home.component';
import {ReglementComponent} from './reglement/reglement.component';

const routes: Routes = [
    {path: '', redirectTo: '/acceuil', pathMatch: 'full'},
    {path: 'acceuil', component: HomeComponent},
    {path: 'reglement', component: ReglementComponent},
    {path: 'historique', component: HistoriqueComponent},
    {path: 'evenements', component: EvenementsComponent},
    {
        path: 'club-informatique',
        loadChildren: () => import('./club-informatique/club-informatique.module').then(m => m.ClubInformatiqueModule)
    },
    {path: '**', redirectTo: '/acceuil', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
