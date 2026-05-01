import { ChangeDetectionStrategy, Component, computed, effect, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { History } from '../../../types/history.interface';
import { ELEMENTS_PAGE } from '../../../services/history/history.config';

@Component({
  selector: 'app-histories',
  imports: [RouterLink],
  templateUrl: './histories.html',
  styleUrl: './histories.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Histories {
  public histories = input<History[]>([]);
  public totalHistories = input<number>(0);
  public currentPage = input<number>(0);

  public pages = computed(() =>
    this.totalHistories() ? Math.ceil(this.totalHistories() / ELEMENTS_PAGE) : 0,
  );

  public pagesArray = computed(() => Array.from({ length: this.pages() }, (_, i) => i + 1));

  public fullBlog = input<boolean>(true);

  public onDelete = output<string>();
  public onEdit = output<string>();
  public onChangePage = output<number>();

  protected handleChangePage(page: number) {
    this.onChangePage.emit(page);
  }

  protected deleteHis(id: string) {
    this.onDelete.emit(id);
  }

  protected editHis(id: string) {
    this.onEdit.emit(id);
  }
}
