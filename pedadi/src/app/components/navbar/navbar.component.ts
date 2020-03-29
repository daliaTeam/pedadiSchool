import { Component, OnInit } from '@angular/core';
import { NavbarService, NavbarElement } from '../../services/localServices/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  elements: NavbarElement[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _navbarService: NavbarService) {}

  ngOnInit(): void {
    this.elements = this._navbarService.getNavbarElements();
  }

}
