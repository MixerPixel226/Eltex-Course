import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats {
  public countHis = input<number>(0);
  public onCancelModal = output<void>();

  onCancel() {
    this.onCancelModal.emit();
  }
}
