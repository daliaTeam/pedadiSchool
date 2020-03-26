// Modulos Globales
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { NavbarService } from './services/localServices/navbar.service';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';

// Paginas libres
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
