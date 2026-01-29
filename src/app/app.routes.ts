import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './features/home/home-layout/home-layout.component';
import { AppLayoutComponent } from './features/shared/app-layout/app-layout.component';
export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
      },
    ],
  },
  // 👇 Wildcard route to handle unknown paths (optional)
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
