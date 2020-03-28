import { Component, OnInit } from '@angular/core';
import { HomeService, CarrouselElements, BenefitElements } from '../../services/localServices/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  elements: CarrouselElements[] = [];
  benefit: BenefitElements[] = [];
  bennefit: BenefitElements[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this.elements = this._homeService.getCarrouselElements();
    this.benefit = this._homeService.getBeneficiosUno();
    this.bennefit = this._homeService.getBeneficiosDos();
  }

}
