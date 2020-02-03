import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Location }    from '../Location';
import {HttpClient, HttpHeaders}    from '@angular/common/http'
import { CartService } from '../cart.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {

  location = new Location("","","");
  submitted = false;
  public autoCities=[];
  cityChange: Subject<string>= new Subject<string>();
  message:object;
  messageCity:string;
  current=false;
  city = "";
  invalidCity= false;
  invalidStreet= false;
  curState="";
  clearbtn=true;
  faveratebtn=false;
  share=false;
  validinput=false;

  streetFocus=false;
  cityFocus=false;

  constructor(
    private http:HttpClient, 
    private cartService: CartService
    ) {
    this.cityChange.pipe(
      debounceTime(1), //wait 0.2s
      distinctUntilChanged())
      .subscribe(value =>{
        this.location.city= value;
        this.getAutoCity(this.location.city);
      }); 
  }
  faverate(){
    this.faveratebtn=true;
  }

  onSubmit() { 
    this.submitted = true;
    this.clearbtn= true;
    this.check();
    if(!this.location.current){
      if(!this.invalidStreet&& !this.invalidCity&& this.location.state!="state")
      {
        this.validinput=true;
        this.getWeatherData();
        this.getSealData();
      }
    }else if(this.location.current){
      this.validinput=true;
      this.invalidCity= false;
      this.invalidStreet= false;
      this.getCurWeatherData();
    }
    else{
      this.validinput=false;
    }
  } 

  check(){
    if(this.location.street==null || this.location.street.trim()==""){
      this.invalidStreet=true;
    }else{
      this.invalidStreet=false;
    }
    if(this.location.city==null || this.location.city.trim()==""){
      this.invalidCity=true;
    }else{
      this.invalidCity=false;
    }
  }

  getWeatherData(){
    let api ="localhost:3000/location";
    api += '?street=' + this.location.street;
    api += '&city=' + this.location.city;
    api += '&state=' + this.location.state;
    this.http.get(api).subscribe((response:any)=>{
      if(response=="Error: getGeocode ") {
        this.validinput= true;
        console.log(this.validinput);
      }else{
        this.validinput= false;
      }
      this.cartService.setWeatherObj(response);
      this.cartService.setCityString(this.location.city);
    });
    this.curState= this.location.state;
    this.city = this.location.city;
  }

  getSealData(){
    let api ="localhost:3000/seal";
    if(this.location.current){
      api += '?inputState=' + this.curState;
    }else{
      api += '?inputState=' + this.location.state;
    }
    this.http.get(api).subscribe((response:any)=>{
      this.cartService.setSealObj(response);
    });
  }

  getCurWeatherData(){

    let api ="localhost:3000/current";
    this.http.get(api).subscribe((response:any)=>{
      this.current=true;
      this.city= response.city;
      this.curState= response.region;
      this.getSealData();
      var lat =response.lat;
      var lng=response.lon;
      let api2= "/curforcast";
      api2 +='?lat='+ lat;
      api2 +='&lng='+lng;
      this.http.get(api2).subscribe((response:any)=>{
        this.cartService.setWeatherObj(response);
        this.cartService.setCityString(this.city);
        console.log(response);
      });
    });
  }

  check_cur(){
    if(this.location.current){
      this.location.city="";
      this.location.street="";
      this.location.state="state";
      this.invalidCity= false;
      this.invalidStreet= false;
    }
  }

  clear(){
    this.location = new Location("","","state",false);
    this.location.state= "state";
    this.invalidCity= false;
    this.invalidStreet= false;
    this.submitted =false;
    this.clearbtn=false;
    this.faveratebtn=false;
  }

 /* check() {
  	console.log(typeof(this.location.current));
  }*/
  //construct api of autocomplete
  getAutoCity(city: string)
  {
    let api ="localhost:3000/autoComplete";
    api += '?inputCity=';
    api += city;
    this.autoCities=[];
    this.http.get(api).subscribe((response:any)=>{
      for(var i=0; i<5; i++){
        this.autoCities[i]= response.predictions[i].structured_formatting.main_text;
      }
    });
  }

  //use observer to improve autocomplete
  improveAutoCity(query:string){
    this.cityChange.next(query);
  }


  ngOnInit() {
   this.location.state= "state";
  }

}
