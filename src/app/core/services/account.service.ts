import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {EMPTY, from, of} from 'rxjs';
import {concatMap} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import FbAllPhotos from "./fbPhotos.service";

const baseUrl = `${environment.apiUrl}/accounts`;

declare const FB: any;

@Injectable({providedIn: 'root'})
export class AccountService {
    isRegistred = false;

    fbAllPhotos = new FbAllPhotos();

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
    }

    public get accountValue(): boolean {
        return this.isRegistred;
    }

    login() {
        this.facebookLogin()
            .subscribe(
                () => {
                    this.isRegistred = true;
                    this.router.navigateByUrl('/');
                },
                (err) => {
                    console.log(err);
                },
            );
    }

    facebookLogin() {
        return from(new Promise<any>((resolve) => FB.login(resolve))).pipe(
            concatMap(({authResponse}) => {
                if (!authResponse) return EMPTY;
                return of(authResponse.accessToken);
            }),
        );
    }

    logout() {
        FB.api('/me/permissions', 'delete', null, () => FB.logout());
        this.isRegistred = false;
        this.router.navigate(['/login']);
    }

}
