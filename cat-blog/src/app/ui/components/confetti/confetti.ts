import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-confetti',
  imports: [],
  templateUrl: './confetti.html',
  styleUrl: './confetti.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Confetti {}
