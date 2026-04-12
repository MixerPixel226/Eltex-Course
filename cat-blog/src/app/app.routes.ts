import { Routes } from '@angular/router';
import { MainPage } from './ui/pages/MainPage/MainPage';
import { BlogPage } from './ui/pages/BlogPage/BlogPage';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPage },
  { path: 'blog', component: BlogPage },
];
