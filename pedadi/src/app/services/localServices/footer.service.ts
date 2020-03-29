import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private refer: Referencias[] = [
{
  icono: 'fas fa-map-marked-alt',
  descripcion: 'Corpus Cristi 606, Universidad, El Arenal, Agencia de Policia de Cinco Señores, 68126 Oaxaca de Juárez, Oax'
},
{
  icono: 'fas fa-phone',
  descripcion: '951 277 0113'
},
{
  icono: 'fas fa-phone',
  descripcion: '951 277 0113'
},
{
  icono: 'fas fa-envelope',
  descripcion: 'intituto_pedadi@outlook.es'
}
  ];

  constructor() {}
  getReferencia(): Referencias[] {
    return this.refer;
  }
}

export interface Referencias {
  icono: string;
  descripcion: string;
}
