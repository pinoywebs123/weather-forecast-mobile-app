import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather : any;
  forecast: any;
  constructor(public navCtrl: NavController, public weatherProv: WeatherProvider) {

  }
  
  ionViewDidLoad(){
    this.weatherProv.getWeather().subscribe(weather => {
      this.weather = weather.current_observation;
    });

    this.weatherProv.getForecast().subscribe(forecast => {
     this.forecast = forecast.forecast.txt_forecast.forecastday;
    });
    
  }

}
