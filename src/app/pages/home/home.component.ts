import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ClimateService } from '../../services/climate-service.service';
import { Observable, tap } from 'rxjs';
import { ClimateInterface } from '../../interfaces/climate-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  _climateService = inject(ClimateService)

  // climateData?: Observable<ClimateInterface>

  climateData?: ClimateInterface

  ngOnInit() {
    // this.climateData = this._climateService.getClimate();
    this._climateService.getClimate().subscribe({next: (data) => {
      this.climateData = data as ClimateInterface
    }, complete: () => {
      console.log(this.climateData)
    }})
  }

}
