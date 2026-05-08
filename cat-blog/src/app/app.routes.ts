import { Routes } from '@angular/router';
import { MainPage } from './ui/pages/main-page/main-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPage, title: 'Главная' },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadComponent: () => import('./ui/pages/blog-page/blog-page').then((c) => c.BlogPage),
        title: 'Блог',
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./ui/pages/history-page/history-page').then((c) => c.HistoryPage),
      },
    ],
  },
  {
    path: 'casino',
    loadComponent: () => import('./ui/pages//casino-page/casino-page').then((c) => c.CasinoPage),
    title: 'Казино',
  },
];
