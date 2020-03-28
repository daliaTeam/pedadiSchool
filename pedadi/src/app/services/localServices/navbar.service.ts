import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private elements: NavbarElement[] = [
    {
      nombre: 'Inicio',
      link: '/home'
    },
    {
      nombre: 'Nosotros',
      link: '/about'
    },

  ];

  constructor() {}

  getNavbarElements(): NavbarElement[] {
    return this.elements;
  }
}

export interface NavbarElement {
  nombre: string;
  link: string;
}
