import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'why-choose-us',
    loadComponent: () =>
      import('./why-choose/why-choose.component').then(
        (m) => m.WhyChooseComponent,
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./home-product/home-product.component').then(
        (m) => m.HomeProductComponent,
      ),
  },
];
