import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private carrElements: CarrouselElements[] = [
    {
      titulo: 'Instituto Pedadi',
      subtitulo: 'Sub 1',
      link: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/carrusel1.jpg?alt=media&token=c724a71f-8509-4825-9578-9c2c305bfd02',
      clase: 'carousel-item active',
    },
    {
      titulo: 'Titulo 2',
      subtitulo: 'Sub 2',
      link: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/carrusel2.jpg?alt=media&token=712dc8ff-bb71-497f-b2f7-4ddae01e6eeb',
      clase: 'carousel-item',

    },
    {
      titulo: 'Titulo 3',
      subtitulo: 'Sub 3',
      link: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/carrusel3.jpg?alt=media&token=7c8d377b-29fe-48c7-b80a-609200d5afce',
      clase: 'carousel-item',
    },
    {
      titulo: 'Titulo 4',
      subtitulo: 'Sub 4',
      link: 'https://firebasestorage.googleapis.com/v0/b/bdinstitutopedadi.appspot.com/o/carrusel4.jpg?alt=media&token=1f05db62-ecb6-4061-9347-c6052828dff1',
      clase: 'carousel-item',
    },
  ];
  private beneficiosone: BenefitElements[] = [
    {
      beneficio: 'Formacion Emprendedora',
      icono: 'fas fa-external-link-alt fa-2x'
    },

    {
      beneficio: 'Alianza con Bussines Kid',
      icono: 'fas fa-external-link-alt fa-2x'
    },

    {
      beneficio: 'Alianza con Bussines Kid',
      icono: 'fas fa-external-link-alt fa-2x'
    },
  ];
  private beneficiostwo: BenefitElements[] = [
    {
      beneficio: 'Talleres deportivos',
      icono: 'fas fa-external-link-alt fa-2x'
    },
    {
      beneficio: 'Alianza con Bussines Kid',
      icono: 'fas fa-external-link-alt fa-2x'
    },
    {
      beneficio: 'Clases de computacion',
      icono: 'fas fa-external-link-alt fa-2x'
    },
  ];


  constructor() { }
  getCarrouselElements(): CarrouselElements[] {
    return this.carrElements;
  }
  getBeneficiosUno(): BenefitElements[] {
    return this.beneficiosone;
  }
  getBeneficiosDos(): BenefitElements[] {
    return this.beneficiostwo;
  }

}

export interface CarrouselElements {
  titulo: string;
  subtitulo: string;
  link: string;
  clase: string;
}
export interface BenefitElements {
  beneficio: string;
  icono: string;
}
