import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ClimateService } from '../../services/climate-service.service';
import { Observable, tap } from 'rxjs';
import { ClimateInterface } from '../../interfaces/climate-interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  _fb = inject(FormBuilder)
  _climateService = inject(ClimateService)

  climateDataOb?: Observable<ClimateInterface>

  climateData?: ClimateInterface

  citySearchData = this._fb.group({
    cidade: ["", Validators.required]
  })

  ngOnInit() {
    this.climateDataOb = this._climateService.getClimate("campinas");
    this._climateService.getClimate("campinas").subscribe({next: (data) => {
      this.climateData = data as ClimateInterface
    }, complete: () => {
      console.log(this.climateData)
    }})
  }

  onSearch() {
    this.climateDataOb = this._climateService.getClimate(this.citySearchData.controls.cidade.value!);
    this._climateService.getClimate(this.citySearchData.controls.cidade.value!).subscribe({next: (data) => {
      this.climateData = data as ClimateInterface
    }, complete: () => {
      console.log(this.climateData)
    }})
  }

}
