import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'app-navbar',
    template: `
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand text-success" href="/">
                    <h3>Lycée Ibn Batouta</h3>
                    <small>AKLIM</small>
                </a>
                <button class="btn btn-success" style="border-radius: 0">S'identifier</button>
            </div>
        </nav>
        <nav class="navbar navbar-expand-sm sticky-top  navbar-dark bg-dark shadow-sm">
            <div class="container">
                <div></div>
                <button class="navbar-toggler" (click)="isCollapsed = !isCollapsed" [attr.aria-expanded]="!isCollapsed"
                        aria-controls="collapseBasic">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapseBasic" [collapse]="isCollapsed"
                     [isAnimated]="true">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" [class.active]="currentActiveUrl==='/acceuil'" href="/">Acceuil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" [class.active]="currentActiveUrl==='/reglement'" href="/reglement">Reglement</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" [class.active]="currentActiveUrl==='/historique'" href="/historique">Historique</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" [class.active]="currentActiveUrl==='/evenements'" href="/evenements">Evénements</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" [class.active]="currentActiveUrl.includes('club-informatique')"
                               href="club-informatique">Club Informatique</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `,
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;
    currentActiveUrl = '';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentActiveUrl = this.router.url
            }
        })

    }
}
