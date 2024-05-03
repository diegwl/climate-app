import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ClimateInterface } from '../interfaces/climate-interface';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  constructor(private http: HttpClient) { }

  apiKey = "5254e4752733f27384f27d7aae8d2f6a"
  lat = -22.90
  lon = -47.06

  con = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`;

  getClimate() {
    return this.http.get(this.con).pipe(
      map((val: any) => {
        return {
          temp: Math.round(val.main.temp - 273.15),
          temp_min: Math.round(val.main.temp_min - 273.15),
          temp_max: Math.round(val.main.temp_max - 273.15),
          humidity: val.main.humidity,
          wind_speed: val.wind.speed,
          weather: val.weather[0].main,
          city_name: val.name,
        };
      })
    )
  }

}
