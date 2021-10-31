import {environment} from '../../../environments/environment';
import {AccountService} from '../services';

declare const FB: any;

export function appInitializer(accountService: AccountService) {
    return () => {
        let res: any = null;
        return new Promise((resolve) => {
            res = resolve;
            (window as any)['fbAsyncInit'] = function () {
                FB.init({
                    appId: environment.facebookAppId,
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v12.0',
                });
                FB.getLoginStatus(({authResponse}: any) => {
                    if (authResponse) {
                        accountService.isRegistred = true
                        resolve('connected')
                    } else {
                        accountService.isRegistred = false;
                        resolve('Cant authenticate');
                    }
                });

            };
            (function (d, s, id) {
                let js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.onerror = (e) => {
                    res();
                }
                (js as any).src = 'https://connect.facebook.net/en_US/sdk.js';
                (fjs as any).parentNode.insertBefore(js, fjs);
            })(document, 'script', 'facebook-jssdk');


        });
    }
}
