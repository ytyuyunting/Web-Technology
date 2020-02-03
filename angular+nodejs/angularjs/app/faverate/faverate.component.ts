import { Component, OnInit } from '@angular/core';
import { FaverateService } from '../faverate.service';

@Component({
  selector: 'app-faverate',
  templateUrl: './faverate.component.html',
  styleUrls: ['./faverate.component.css']
})
export class FaverateComponent implements OnInit {
  items=[];
  godetail=false;
  submitted=true;
  city:string;
  curState:string;
  share=true;
  noRecords=false;

  constructor(
  	private faverateService: FaverateService 
  	) {
  		this.items= this.faverateService.getFaverateItems();
      if(this.items.length==0){
        this.noRecords=true;
      }
      else{
        this.noRecords=false;
      }
   }

  goDetails(x,y){
  	this.godetail=true;
  	this.city= x;
  	this.curState=y;
  }
  delete(x){
  	this.faverateService.removeThisItem(x);
  }
  ngOnInit() {
  }

}
