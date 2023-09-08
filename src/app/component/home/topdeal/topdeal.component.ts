import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-topdeal',
  templateUrl: './topdeal.component.html',
  styleUrls: ['./topdeal.component.scss']
})
export class TopdealComponent {
  toDealsList: any = [];
  slidesStore: any;
  constructor(private http: HttpService) {

  }
  ngOnInit() {

    this.http.getDataFormServer('top-deals').subscribe((el: any) => {
      console.log(el)
      if (el && el.products && el.products.length > 0) {
        console.log('top-deals', el)
        this.toDealsList = el.products
        console.log(this.toDealsList)
      }
    },
      (error) => { })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}