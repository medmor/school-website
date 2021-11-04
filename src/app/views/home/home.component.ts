import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="container bg-white pt-1">
            <header class=" p-2 border-bottom ">
                <h3>Page d'acceuil en cours de construction</h3>
                <img src="assets/en-cours-de-preparation.jpg" alt="en cours de preparation" style="width: 100%">
            </header>
            <main class=" p-2 border-bottom">
                <h3>Page d'acceuil en cours de construction</h3>
                <img src="assets/en-cours-de-preparation.jpg" alt="en cours de preparation" style="width: 100%">
            </main>
            <footer class=" p-2">
                <h3>Page d'acceuil en cours de construction</h3>
                <img src="assets/en-cours-de-preparation.jpg" alt="en cours de preparation" style="width: 100%">
            </footer>
        </div>
    `,
    styles: [
        `


        `,
    ],
})
export class HomeComponent implements OnInit {
    imgSrc =
        'https://scontent.frba2-2.fna.fbcdn.net/v/t1.6435-9/118771630_107887714381969_1872225973628943776_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=62dylFG6soUAX9FckIT&tn=nUXxe2Z7eNPeRc5Z&_nc_ht=scontent.frba2-2.fna&oh=bd1a74f9059f294d6e20611ff7b03a72&oe=6191DF5D';

    constructor() {
    }

    ngOnInit(): void {
    }
}
