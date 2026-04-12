import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Histories } from '../../components/histories/histories';
import { ControlPanel } from '../../components/control-panel/control-panel';
import { CreatingForm } from '../../components/creating-form/creating-form';
import { Modal } from '../../components/modal/modal';
import { Stats } from '../../components/stats/stats';

@Component({
  selector: 'app-blog-page',
  imports: [Histories, ControlPanel, CreatingForm, Modal, Stats],
  templateUrl: './BlogPage.html',
  styleUrl: './BlogPage.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {
  public creatingModalOpen = signal<Boolean>(false);
  public statsModalOpen = signal<Boolean>(false);

  cancelModalCreating() {
    this.creatingModalOpen.set(false);
  }

  openModalCreating() {
    this.creatingModalOpen.set(true);
  }

  cancelModalStats() {
    this.statsModalOpen.set(false);
  }

  openModalStats() {
    this.statsModalOpen.set(true);
  }
}
