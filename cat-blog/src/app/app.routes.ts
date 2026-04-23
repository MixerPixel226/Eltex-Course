import { Routes } from '@angular/router';
import { MainPage } from './ui/pages/main-page/main-page';
import { BlogPage } from './ui/pages/blog-page/blog-page';
import { CasinoPage } from './ui/pages/casino-page/casino-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPage },
  { path: 'blog', component: BlogPage },
  { path: 'casino', component: CasinoPage },
];
