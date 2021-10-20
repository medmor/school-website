import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-club-informatique',
    template: `
        <div class="container p-3">
            <div class="card mb-3 shadow bg-success text-light">
                <div class="card-body">
                    <div class="card-text">
                        {{content.firstP}}
                    </div>
                </div>
            </div>
            <div class="row">
                <div *ngFor="let card of content.cards" class="col-md-4 mb-3">
                    <div class="card shadow bg-success text-light">
                        <div class="card-body">
                            <div class="card-title">
                                <h5>{{card.title}}</h5>
                            </div>
                            <div class="card-text">
                                {{card.text}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow  bg-success text-light">
                <div class="card-header shadow">
                    <div class="card-title"><h3>Exemples de projets à réaliser durant les séances</h3></div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div *ngFor="let project of projects" class="col-md-4 mb-3">
                            <div class="card shadow" (click)="navigateToProject(project.path)">
                                <div class="card-body  bg-success text-light">
                                    <div class="card-title">
                                        <h5>{{project.title}}</h5>
                                    </div>
                                    <div class="card-title">
                                        {{project.title}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `
})
export class ClubInformatiqueComponent implements OnInit {
    content = content;
    projects = projects;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    navigateToProject(path: string) {
        this.router.navigateByUrl('/club-informatique' + path);
    }
}

const content = {
    firstP: 'Le club de programmation informatique vise à établir une culture de la programmation atteignant tous les élèves passionnés par la programmation.',
    cards: [
        {
            title: 'Qu’est-ce que le club informatique ?',
            text: 'C’est un club pédagogique créé dans le but d’apprendre aux élèves les bases de la programmation informatique.'
        },
        {
            title: 'Qu’apprendront les élèves ?',
            text: 'Les élèves apprendront la programmation web (html, css, javascript) à travers la création d’un simple site web du lycée, des simples projets, et des petits jeux.'
        },
        {
            title: 'À qui s’adresse ce club ?',
            text: 'Tous les élèves qui veulent apprendre à programmer ! Nous commençons par les bases absolues, et après, les élèves peuvent passer a la création de projets plus avances.'
        },
    ]
}
const projects = [
    {title: 'Deviner le nombre', path: '/guess-the-number'},
    {title: 'Un simple compteur de click', path: '/simple-click-counter'},
    {title: 'Résoudre une équation du premier degré', path: '/equation-solver'},
    {title: 'Chronomètre', path: '/chronometre'}
];