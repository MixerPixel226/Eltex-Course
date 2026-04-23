import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SlotMachineComponent } from '../../components/slot-machine/slot-machine';

@Component({
  selector: 'app-casino-page',
  imports: [SlotMachineComponent],
  templateUrl: './casino-page.html',
  styleUrl: './casino-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CasinoPage {}
