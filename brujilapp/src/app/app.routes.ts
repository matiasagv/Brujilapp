import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'libro-sombras',
    loadComponent: () => import('./pages/libro-sombras/libro-sombras.page').then( m => m.LibroSombrasPage)
  },
  {
    path: 'temas',
    loadComponent: () => import('./pages/temas/temas.page').then( m => m.TemasPage)
  },
  {
    path: 'rituales',
    loadComponent: () => import('./pages/rituales/rituales.page').then( m => m.RitualesPage)
  },
];
