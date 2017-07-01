import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  token : string;
  url : string;
  url2 : string;
  constructor(public http: Http) {
   this.token = 'b1df59c071fac34a';
   this.url = 'http://localhost:8100/api/'+this.token+'/conditions/q/PH/Quezon_City.json';
   this.url2 = 'http://localhost:8100/api/'+this.token+'/forecast/q/PH/Quezon_City.json';
  }
  
  getWeather(){
    return this.http.get(this.url).map( res=> res.json());
  }

  getForecast(){
    return this.http.get(this.url2).map(res=> res.json());
  }

  

}
