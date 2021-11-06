import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `
        <div [dir]="dir()">
            <app-navbar></app-navbar>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [],
})
export class AppComponent implements OnInit {
    constructor(public translate: TranslateService) {
        translate.addLangs(['fr', 'ar']);
        translate.setDefaultLang('fr');

        translate.use('ar');
    }

    ngOnInit() {}
    dir() {
        return this.translate.currentLang === 'ar' ? 'rtl' : 'ltr';
    }
}
