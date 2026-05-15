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
import { History, HistoryForm } from '../../../types/history.interface';

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

  public editingHistory = signal<HistoryForm>({
    title: '',
    content: '',
    imgSrc: null,
    categoryId: null,
  });

  public idEditing = signal<string | null>(null);

  public histories = this.historyStoreService.histories;

  public titleForm = computed(() => (this.idEditing() ? 'Редактировать статью' : 'Создать статью'));

  addHistory(event: { formData: HistoryForm; file: File | null }) {
    this.historyStoreService.addHistory(event.formData, event.file);
  }

  editHistory(event: { formData: HistoryForm; id: string; file: File | null }) {
    this.historyStoreService.editingHistory(event.id, event.formData, event.file);
  }

  deleteHistory(id: string) {
    this.historyStoreService.deleteHistory(id);
  }

  changePage(page: number) {
    this.historyStoreService.changePage(page);
  }

  handleEditHis(id: string) {
    const history = this.histories().find((el) => el.id === id);
    if (history) {
      const { title, content, imgSrc, categoryId } = history;
      this.idEditing.set(history.id);
      this.editingHistory.set({ title, content, imgSrc, categoryId });
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
