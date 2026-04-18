import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Histories } from '../../components/histories/histories';
import { ControlPanel } from '../../components/control-panel/control-panel';
import { CreatingForm } from '../../components/creating-form/creating-form';
import { Modal } from '../../components/modal/modal';
import { Stats } from '../../components/stats/stats';

interface History {
  id: string;
  title: string;
  desc: string;
  img: string;
}

interface FormHistory {
  id?: string;
  title: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-blog-page',
  imports: [Histories, ControlPanel, CreatingForm, Modal, Stats],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {
  public creatingModalOpen = signal<Boolean>(false);
  public statsModalOpen = signal<Boolean>(false);

  public editingHistory = signal<FormHistory>({ title: '', desc: '', img: '' });

  public histories = signal<History[]>([
    {
      id: 'sdfs35dfsdf',
      title: 'Двадцать пять оттенков кошака',
      desc: 'sdfsdfsdfsdf',
      img: 'assets/no-image.png',
    },
    { id: 's45Aadfs6dfsdf', title: 'sadasdsad', desc: 'sdfsdfsdfsdf', img: 'assets/no-image.png' },
    { id: 'sdfsd7fsd8fdsd', title: 'sadasdsad', desc: 'sdfsdfsdfsdf', img: 'assets/no-image.png' },
  ]);

  public countHistories = computed(() => {
    return this.histories().length;
  });

  addHistory(newHis: any) {
    const history = {
      id: crypto.randomUUID(),
      title: newHis.title,
      desc: newHis.desc,
      img: newHis.img || 'assets/no-image.png',
    };
    this.histories.update((prev) => [...prev, history]);
  }

  editHistory(objHis: any) {
    this.histories.update((prev) => prev.map((el) => (el.id === objHis.id ? objHis : el)));
  }

  deleteHistory(id: string) {
    this.histories.update((prev) => prev.filter((e) => e.id !== id));
  }

  handleEditHis(id: string) {
    const history = this.histories().find((el) => el.id === id);
    if (history) {
      this.editingHistory.set(history);
      this.modalCreatingFormOpen(true);
    }
  }

  modalCreatingFormOpen(is: Boolean) {
    this.creatingModalOpen.set(is);
  }

  modalStatsOpen(is: Boolean) {
    this.statsModalOpen.set(is);
  }
}
