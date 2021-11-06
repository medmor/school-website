import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
    selector: 'app-home',
    template: `
        <div class="container bg-white pt-1 text-center">
            <carousel>
                <slide>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D453889076448496%26id%3D107885867715487&show_text=true&width=500"
                        width="100%"
                        height="550"
                        style="border:none;overflow:hidden"
                        scrolling="no"
                        frameborder="0"
                        allowfullscreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </slide>
                <slide>
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D449935373510533%26id%3D107885867715487&show_text=true&width=500"
                        width="100%"
                        height="550"
                        style="border:none;overflow:hidden"
                        scrolling="no"
                        frameborder="0"
                        allowfullscreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </slide>
                <slide>
                    <div class="row bg-dark ">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <iframe
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D449164203587650%26id%3D107885867715487&show_text=true&width=500"
                                width="100%"
                                height="550"
                                style="border:none;overflow:hidden"
                                scrolling="no"
                                frameborder="0"
                                allowfullscreen="true"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                </slide>
            </carousel>
        </div>
    `,
    styles: [``],
    providers: [{ provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: true } }],
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
