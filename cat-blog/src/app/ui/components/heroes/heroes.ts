import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  imports: [],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Heroes { }
