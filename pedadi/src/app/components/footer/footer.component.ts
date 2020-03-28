import { Component, OnInit } from '@angular/core';
import { FooterService, Referencias } from '../../services/localServices/footer.service';
import { NavbarService, NavbarElement } from '../../services/localServices/navbar.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
   navElements: NavbarElement[];
   footElements: Referencias[];

  // tslint:disable-next-line: variable-name
  constructor(private _footerService: FooterService, private _navbarService: NavbarService ) {
    this.navElements = this._navbarService.getNavbarElements();
    this.footElements = this._footerService.getReferencia();

   }

  ngOnInit(): void {
  }

}
