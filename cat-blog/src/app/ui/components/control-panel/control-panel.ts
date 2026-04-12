import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  imports: [],
  templateUrl: './control-panel.html',
  styleUrl: './control-panel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanel {
  public onOpenCreatingModal = output<void>();
  public onOpenStatsModal = output<void>();

  openCreatingModal() {
    this.onOpenCreatingModal.emit();
  }

  openStatsModal() {
    this.onOpenStatsModal.emit();
  }
}
