import {Component, OnInit} from '@angular/core';
import {AccountService} from "../core/services";

@Component({
    selector: 'app-root',
    template: `
        <app-navbar></app-navbar>
        <div *ngIf="testing">
            <button class="btn btn-primary"
                    (click)="logedIn()?logout():login()">{{logedIn() ? "logout from" : "login to"}}
                Facebook
            </button>
            <img *ngIf="imgUrl" [src]="imgUrl" alt="">
        </div>

        <router-outlet></router-outlet>
    `,
    styles: [],
})
export class AppComponent implements OnInit {
    testing = false;
    imgUrl: string = '';

    constructor(private accountService: AccountService) {

    }

    ngOnInit() {
        this.accountService.fbAllPhotos.getProfilePicture().then((value => {
            this.imgUrl = value as string;
        })).catch(err => {
            console.log(err)
        })
    }

    login() {
        this.accountService.login();
    }

    logout() {
        this.accountService.logout();
    }

    logedIn() {
        return this.accountService.isRegistred;
    }
}
