import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats {
  public onCancelModal = output<void>();

  onCancel() {
    this.onCancelModal.emit();
  }
}
