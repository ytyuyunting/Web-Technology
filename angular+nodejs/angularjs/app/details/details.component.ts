import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { FaverateService } from '../faverate.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  @Input() submitted: boolean;
  @Input() city: string;
  @Input() curState: string;
  @Input() share:boolean

  weaObj ={};
  sealObj={};
  activeTab = '';
  //city="";
  result=false;
  invalidAdd=false;
  faverateObj={};
  //share=false;
  starsrc="star_border";

  constructor(
    private cartService: CartService,
    private faverateService: FaverateService 
    ) {
    this.cartService.currentWeather.subscribe(val =>{
        this.weaObj=val;
        this.checkEmpty(this.weaObj);
     });
    this.cartService.currentSeal.subscribe(val =>{
     this.sealObj= val;
   });
    this.cartService.currentCity.subscribe(val =>{
       this.city= val;
   });
  }
  
  checkEmpty(obj){
    if(typeof obj.hourly != 'undefined'){
      this.result=true;
    }
  }
  /*checkValid(obj){
    if(typeof obj.hourly != 'undefined'){
      this.result=true;
      //this.submitted=true;
      this.invalidAdd=false;
    }
    else{
      this.invalidAdd=true;
      //this.submitted=false;
    }
  }*/

  //}

  modifyFaverate(){
    this.share=!this.share;
    this.faverateObj={
      city: this.city,
      state: this.curState,
      srcObj: this.sealObj,
      weaObj: this.weaObj
    }
    if(this.share){
      this.starsrc="star";
      document.getElementById("star").style.color="yellow";
      this.faverateService.addToFaverate(this.faverateObj);
      console.log(this.faverateService.getFaverateItems());
    }
    else{   
      this.starsrc="star_border";
      document.getElementById("star").style.color="initial";
      this.faverateService.removeFaverateItem(this.faverateObj)
      console.log(this.faverateService.getFaverateItems());
    }
  }

  ngOnInit() {
    if(this.share){
      this.starsrc="star";
      document.getElementById("star").style.color="yellow";

    }
    else{
      this.starsrc="star_border";
      document.getElementById("star").style.color="initial";
    }
  }

}
