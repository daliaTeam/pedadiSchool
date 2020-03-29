import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {path: 'login', component: LoginComponent},
    { path: '**', component: HomeComponent },
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );
