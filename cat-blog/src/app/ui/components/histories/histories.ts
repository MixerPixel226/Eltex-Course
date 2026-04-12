import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-histories',
  imports: [RouterLink],
  templateUrl: './histories.html',
  styleUrl: './histories.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Histories {
  public histories = [
    { id: 'sdfsdfsdf', title: 'sadasdsad', desc: 'sdfsdfsdfsdf', img: 'assets/no-image.png' },
    { id: 'sdfsdsdsdfsdf', title: 'sadasdsad', desc: 'sdfsdfsdfsdf', img: 'assets/no-image.png' },
    { id: 'sAadfsdfsdf', title: 'sadasdsad', desc: 'sdfsdfsdfsdf', img: 'assets/no-image.png' },
    { id: 'sdfsdfsdfdsd', title: 'sadasdsad', desc: 'sdfsdfsdfsdf', img: 'assets/no-image.png' },
  ];

  public fullBlog = input<Boolean>(true);

  public filterHistory = computed(() => {
    return this.fullBlog() ? this.histories : this.histories.slice(2);
  });
}
