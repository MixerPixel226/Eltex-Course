import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Histories } from '../../components/histories/histories';
import { ControlPanel } from '../../components/control-panel/control-panel';
import { CreatingForm } from '../../components/creating-form/creating-form';
import { Modal } from '../../components/modal/modal';
import { Stats } from '../../components/stats/stats';
import { HistoryStore } from '../../../services/history/history-store';
import { History, FormCreate } from '../../../types/history.interface';

@Component({
  selector: 'app-blog-page',
  imports: [Histories, ControlPanel, CreatingForm, Modal, Stats],
  templateUrl: './blog-page.html',
  styleUrl: './blog-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HistoryStore],
})
export class BlogPage implements OnInit {
  public creatingModalOpen = signal<boolean>(false);
  public statsModalOpen = signal<boolean>(false);

  public historyStoreService = inject(HistoryStore);

  ngOnInit(): void {
    this.historyStoreService.getHistories();
  }

  public editingHistory = signal<FormCreate>({ title: '', desc: '', img: '' });

  public histories = this.historyStoreService.histories;

  public titleForm = computed(() =>
    this.editingHistory().id ? 'Редактировать статью' : 'Создать статью',
  );

  addHistory(objHis: FormCreate) {
    this.historyStoreService.addHistory(objHis);
  }

  editHistory(objHis: History) {
    this.historyStoreService.editingHistory(objHis);
  }

  deleteHistory(id: string) {
    this.historyStoreService.deleteHistory(id);
  }

  changePage(page: number) {
    this.historyStoreService.changePage(page);
    console.log('2');
  }

  handleEditHis(id: string) {
    const history = this.histories().find((el) => el.id === id);
    if (history) {
      this.editingHistory.set(history);
      this.modalCreatingFormOpen(true);
    }
  }

  modalCreatingFormOpen(is: boolean) {
    this.creatingModalOpen.set(is);
  }

  modalStatsOpen(is: boolean) {
    this.statsModalOpen.set(is);
  }
}
