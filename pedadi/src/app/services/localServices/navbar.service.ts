import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private elements: Element[] = [
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

  getElements(): Element[] {
    return this.elements;
  }
}

export interface Element {
  nombre: string;
  link: string;
}
