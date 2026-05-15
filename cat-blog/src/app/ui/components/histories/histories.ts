import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  output,
  ViewChild,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { History } from '../../../types/history.interface';
import { ELEMENTS_PAGE } from '../../../services/history/history.config';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-histories',
  imports: [RouterLink, MatIconModule],
  templateUrl: './histories.html',
  styleUrl: './histories.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Histories {
  public histories = input<History[]>([]);
  public totalHistories = input<number>(0);
  public currentPage = input<number>(0);
  private router = inject(Router);

  public pages = computed(() =>
    this.totalHistories() ? Math.ceil(this.totalHistories() / ELEMENTS_PAGE) : 0,
  );

  public pagesArray = computed(() => Array.from({ length: this.pages() }, (_, i) => i + 1));

  public fullBlog = input<boolean>(true);

  public onDelete = output<string>();
  public onEdit = output<string>();
  public onChangePage = output<number>();

  protected navigateHistory(id: string) {
    this.router.navigate(['/blog', id]);
  }

  protected handleChangePage(page: number) {
    this.onChangePage.emit(page);
  }

  protected deleteHis(event: Event, id: string) {
    event.stopPropagation();
    this.onDelete.emit(id);
  }

  protected editHis(event: Event, id: string) {
    event.stopPropagation();
    this.onEdit.emit(id);
  }
}
