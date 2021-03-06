import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-club-informatique',
    template: `
        <div class="container p-3" style="font-size: 1.2em">
            <div *ngIf="content" class="card mb-3 shadow text-center">
                <div class="card-body">
                    <div class="card-title">
                        <h3>{{ content.firstCard.title }}</h3>
                    </div>
                    <div class="card-text">
                        {{ content.firstCard.text }}
                    </div>
                </div>
            </div>
            <div *ngIf="content" class="row">
                <div *ngFor="let card of content.cards" class="col-md-6 mb-3">
                    <div class="card shadow ">
                        <div class="card-body">
                            <div class="card-title">
                                <h3>{{ card.title }}</h3>
                            </div>
                            <div class="card-text">
                                {{ card.text }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div *ngIf="projects" class="card shadow ">
                <div class="card-header shadow">
                    <div class="card-title">
                        <h3>{{ 'CLUB-INFORMATIQUE.projectsTitle' | translate }}</h3>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div *ngFor="let project of projects" class="col-md-4 mb-3">
                            <div class="card shadow cursor-pointer" (click)="navigateToProject(project.path)">
                                <div class="card-body">
                                    <div class="card-title">
                                        <h5>{{ project.title }}</h5>
                                    </div>
                                    <div class="card-title">
                                        {{ project.title }}
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-dark">{{ 'CLUB-INFORMATIQUE.projectsCardButton' | translate }}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class ClubInformatiqueComponent implements OnInit {
    content: any;
    projects: any;

    constructor(private router: Router, private translateService: TranslateService) {}

    ngOnInit(): void {
        this.getTranslation(this.translateService.currentLang);
        this.translateService.onLangChange.subscribe((event) => {
            this.getTranslation(event.lang);
        });
    }
    getTranslation(lang: string) {
        const currentTranslation = this.translateService.translations[lang];
        this.content = {};
        this.content.firstCard = this.translateService.getParsedResult(currentTranslation, 'CLUB-INFORMATIQUE.firstCard');
        this.content.cards = this.translateService.getParsedResult(currentTranslation, 'CLUB-INFORMATIQUE.cards');
        this.projects = this.translateService.getParsedResult(currentTranslation, 'CLUB-INFORMATIQUE.projects');
    }

    navigateToProject(path: string) {
        this.router.navigateByUrl('/club-informatique' + path);
    }
}

const content = {
    firstCard: {
        title: 'Qu???est-ce que le club informatique???',
        text: 'C???est un club p??dagogique cr???? dans le but d???apprendre aux ??l??ves les bases de la programmation informatique.',
    },
    cards: [
        {
            title: 'Qu???apprendront les ??l??ves???',
            text: 'Les ??l??ves apprendront la programmation web (html, css, javascript) ?? travers la cr??ation d???un simple site web du lyc??e, des simples projets, et des petits jeux.',
        },
        {
            title: '?? qui s???adresse ce club???',
            text: 'Tous les ??l??ves qui veulent apprendre ?? programmer??! Nous commen??ons par les bases absolues, et apr??s, les ??l??ves peuvent passer a la cr??ation de projets plus avanc??s.',
        },
    ],
};
const projects = [
    { title: 'Deviner le nombre', path: '/guess-the-number' },
    { title: 'Un simple compteur de click', path: '/simple-click-counter' },
    { title: 'R??soudre une ??quation du premier degr??', path: '/equation-solver' },
    { title: 'Chronom??tre', path: '/chronometre' },
    { title: 'Calculateur', path: '/calculator' },
    { title: 'Jeux de Tic Tac Toe', path: '/tic-tac-toe' },
    { title: 'Simple jeux de m??moire', path: '/memory-game' },
    { title: 'Simple jeux de correspondance', path: '/matching-game' },
];
