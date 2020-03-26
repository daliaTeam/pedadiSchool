import { Component, OnInit } from '@angular/core';
import { NavbarService, Element } from '../../services/localServices/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  elements: Element[] = [];

  constructor(private _navbarService: NavbarService) {}

  ngOnInit(): void {
    this.elements = this._navbarService.getElements();
    console.log( this.elements );
  }

}
