import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Hello } from '../../components/hello/hello';
import { Heroes } from '../../components/heroes/heroes';
import { Roles } from '../../components/roles/roles';
import { Gallery } from '../../components/gallery/gallery';

@Component({
  selector: 'app-main-page',
  imports: [Header, Footer, Hello, Heroes, Roles, Gallery],
  templateUrl: './MainPage.html',
  styleUrl: './MainPage.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage {}
