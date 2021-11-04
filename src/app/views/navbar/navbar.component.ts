import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
                <button
                    class="navbar-toggler"
                    (click)="isCollapsed = !isCollapsed"
                    [attr.aria-expanded]="!isCollapsed"
                    aria-controls="collapseBasic"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapseBasic" [collapse]="isCollapsed" [isAnimated]="true">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" [class.active]="currentActiveUrl === '/acceuil'" (click)="navigateTo('/')" href=""
                                >Acceuil</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                [class.active]="currentActiveUrl === '/reglement'"
                                (click)="navigateTo('/reglement')"
                                href=""
                                >Reglement</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                [class.active]="currentActiveUrl === '/historique'"
                                (click)="navigateTo('/historique')"
                                href=""
                                >Historique</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                [class.active]="currentActiveUrl === '/evenements'"
                                (click)="navigateTo('/evenements')"
                                href=""
                                >Evénements</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                [class.active]="currentActiveUrl.includes('club-informatique')"
                                (click)="navigateTo('/club-informatique')"
                                href=""
                                >Club Informatique</a
                            >
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

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentActiveUrl = this.router.url;
            }
        });
    }
    navigateTo(url: string) {
        this.router.navigateByUrl(url);
    }
}
