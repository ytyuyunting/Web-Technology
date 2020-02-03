import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private WeatherSource: BehaviorSubject<object> = new BehaviorSubject({});
  currentWeather = this.WeatherSource.asObservable();
  
  private CitySource: BehaviorSubject<string> = new BehaviorSubject("");
  currentCity = this.CitySource.asObservable();

  private SealSource: BehaviorSubject<object> = new BehaviorSubject({});
  currentSeal = this.SealSource.asObservable();

  private DetailSource: BehaviorSubject<object> = new BehaviorSubject({});
  currentDetail = this.DetailSource.asObservable();

  constructor() { }

  setCityString(messageCity: string) {
    this.CitySource.next(messageCity)
  }
  setWeatherObj(message: object) {
    this.WeatherSource.next(message)
  }
  setSealObj(message: object) {
    this.SealSource.next(message)
  }
  setDetailObj(message: object) {
    this.DetailSource.next(message)
  }

  
}
