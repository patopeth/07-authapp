import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';

export const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'protegido', component: ProtegidoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
