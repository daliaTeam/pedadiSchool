// Modulos Globales
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios locales
import { NavbarService } from './services/localServices/navbar.service';
import { HomeService } from './services/localServices/home.service';
import { FooterService } from './services/localServices/footer.service';



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
    NavbarService,
    HomeService,
    FooterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
