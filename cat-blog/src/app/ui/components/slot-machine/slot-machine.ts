import { Component, inject, QueryList, ViewChildren } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner';
import { ScoreService } from '../../../services/score-service';
import { Confetti } from '../confetti/confetti';

@Component({
  selector: 'app-slot-machine',
  templateUrl: './slot-machine.html',
  styleUrls: ['./slot-machine.scss'],
  imports: [SpinnerComponent, Confetti],
})
export class SlotMachineComponent {
  @ViewChildren(SpinnerComponent) spinners!: QueryList<SpinnerComponent>;
  scoreService = inject(ScoreService);

  winner: boolean | null = null;
  loserMessage = '';
  matches: number[] = [];

  myIcons = [
    'assets/slots/slot1.png',
    'assets/slots/slot2.png',
    'assets/slots/slot3.png',
    'assets/slots/slot4.png',
    'assets/slots/slot5.png',
  ];

  readonly timers = [1000, 1400, 2200];

  spinning = false;

  handleRepeat() {
    if (this.spinning) return;

    this.scoreService.payByScore(20);

    this.spinning = true;
    this.winner = null;
    this.matches = [];

    this.spinners.forEach((s) => s.reset());
  }

  onSpinnerFinish(value: number) {
    if (this.matches.length < 3) {
      this.matches.push(value);
    }

    if (this.matches.length === 3) {
      const allSame = this.matches.every((v) => v === this.matches[0]);
      this.spinning = false;
      this.winner = allSame;

      if (this.winner) {
        this.scoreService.plusScore(5000);
      }
    }
  }
}
