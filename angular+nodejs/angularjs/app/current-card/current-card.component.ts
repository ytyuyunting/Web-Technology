import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-current-card',
  templateUrl: './current-card.component.html',
  styleUrls: ['./current-card.component.css']
})
export class CurrentCardComponent implements OnInit {
  weaObj={};
  city="";
  sealObj={};
//<img class="seal" src="{{sealObj?.items[0]?.link}}">
  constructor( private cartService: CartService) {

     this.cartService.currentWeather.subscribe(val =>{
     this.weaObj= val;
   });
     this.cartService.currentCity.subscribe(val =>{
     this.city= val;
   });
     this.cartService.currentSeal.subscribe(val =>{
     this.sealObj= val;
   });

  }

  ngOnInit() {
  }

}
