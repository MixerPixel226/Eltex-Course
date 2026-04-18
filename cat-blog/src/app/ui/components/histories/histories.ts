import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

interface History {
  id: string;
  title: string;
  desc: string;
  img: string;
}

@Component({
  selector: 'app-histories',
  imports: [RouterLink],
  templateUrl: './histories.html',
  styleUrl: './histories.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Histories {
  public histories = input<History[]>([]);

  public fullBlog = input<Boolean>(true);
  public onDelete = output<string>();
  public onEdit = output<string>();

  deleteHis(id: string) {
    this.onDelete.emit(id);
  }

  editHis(id: string) {
    this.onEdit.emit(id);
  }

  /*public filterHistory = computed(() => {
    return this.fullBlog() ? this.histories : this.histories.slice(2);
  });*/
}
