import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    template: `
        <nav class="navbar navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand text-success" href="/">
                    <h3>{{ 'NAVBAR.BRAND.HEADING' | translate }}</h3>
                    <small>{{ 'NAVBAR.BRAND.SMALL' | translate }}</small>
                </a>
                <button class="btn btn-success" style="border-radius: 0">{{ 'NAVBAR.BUTTON-IDENTIFICATION' | translate }}</button>
            </div>
        </nav>
        <nav class="navbar navbar-expand-sm sticky-top navbar-dark bg-dark">
            <div class="container">
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
                        <li class="nav-item ">
                            <a class="nav-link  btn" [class.active]="currentActiveUrl === '/acceuil'" (click)="navigateTo('/')">{{
                                'NAVBAR.LIST.ACCEUIL' | translate
                            }}</a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link  btn"
                                [class.active]="currentActiveUrl === '/reglement'"
                                (click)="navigateTo('/reglement')"
                                >{{ 'NAVBAR.LIST.REGLEMENT' | translate }}</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link  btn"
                                [class.active]="currentActiveUrl === '/historique'"
                                (click)="navigateTo('/historique')"
                                >{{ 'NAVBAR.LIST.HISTORIQUE' | translate }}</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link  btn"
                                [class.active]="currentActiveUrl === '/evenements'"
                                (click)="navigateTo('/evenements')"
                                >{{ 'NAVBAR.LIST.EVENEMENTS' | translate }}</a
                            >
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link btn"
                                [class.active]="currentActiveUrl.includes('club-informatique')"
                                (click)="navigateTo('/club-informatique')"
                                >{{ 'NAVBAR.LIST.CLUB-INFORMATIQUE' | translate }}</a
                            >
                        </li>
                    </ul>
                </div>
                <div class="btn-group" dropdown>
                    <button
                        id="button-basic"
                        dropdownToggle
                        type="button"
                        class="btn btn-outline-light dropdown-toggle"
                        aria-controls="dropdown-basic"
                    >
                        {{ 'NAVBAR.BUTTON-LANGUAGE' | translate }} <span class="caret"></span>
                    </button>
                    <ul id="dropdown-split" *dropdownMenu class="dropdown-menu" role="menu" aria-labelledby="button-split">
                        <li role="menuitem"><a class="dropdown-item btn" (click)="setLang('fr')">Français</a></li>
                        <li role="menuitem"><a class="dropdown-item btn" (click)="setLang('ar')">العربية</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `,
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;
    currentActiveUrl = '';
    currentLanguage = 'fr';

    constructor(private router: Router, private translateService: TranslateService) {}

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.currentActiveUrl = this.router.url;
            }
        });
    }
    navigateTo(url: string) {
        this.router.navigateByUrl(url);
        this.isCollapsed = true;
    }
    setLang(lang: string) {
        this.translateService.use(lang);
    }
}
