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
  cidade?: string;

  // con = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`;
  con?: string;

  getClimate(cidade: string) {
    this.cidade = cidade;
    this.con = `https://api.openweathermap.org/data/2.5/weather?q=${this.cidade}&units=metric&appid=${this.apiKey}&lang=pt_br`;
    return this.http.get(this.con).pipe(
      map((val: any) => {
        return {
          temp: Math.round(val.main.temp),
          temp_min: Math.round(val.main.temp_min),
          temp_max: Math.round(val.main.temp_max),
          humidity: val.main.humidity,
          wind_speed: val.wind.speed,
          weather: val.weather[0].main,
          weather_desc: val.weather[0].description,
          city_name: val.name,
          icon: val.weather[0].icon,
        };
      })
    )
  }

}
