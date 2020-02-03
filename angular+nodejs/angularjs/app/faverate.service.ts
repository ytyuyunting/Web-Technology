import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaverateService {
  items=[];

  constructor() {  }

  addToFaverate(product) {
    for(var i in this.items){
        if(product.city==this.items[i].city){
           return;    
        }
    }
    this.items.push(product);
  }

  getFaverateItems() {
    return this.items;
  }

  removeFaverateItem(product) { 
  	for(var i in this.items){
        if(product.city==this.items[i].city){
           this.items.splice(Number(i),1);    
        }
  	}
     return this.items;
  }
  removeThisItem(city){
    for(var i in this.items){
       if(city==this.items[i].city){
           this.items.splice(Number(i),1);    
        }
    }
    return this.items;
  }
}
