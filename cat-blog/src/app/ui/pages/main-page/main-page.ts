import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hello } from '../../components/hello/hello';
import { Heroes } from '../../components/heroes/heroes';
import { Roles } from '../../components/roles/roles';
import { Gallery } from '../../components/gallery/gallery';
import { Histories } from '../../components/histories/histories';

@Component({
  selector: 'app-main-page',
  imports: [Hello, Heroes, Roles, Gallery, Histories],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPage {}
