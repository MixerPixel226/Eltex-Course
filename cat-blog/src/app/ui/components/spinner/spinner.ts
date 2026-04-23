import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.html',
  styleUrls: ['./spinner.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input() icons: string[] = [];
  @Input() timer: number = 1000;
  @Output() onFinish = new EventEmitter<number>();

  @ViewChild('strip') stripRef!: ElementRef;

  extendedIcons: string[] = [];

  private iconHeight = 188;
  private totalSets = 20;
  private lastIconIndex = 0;

  ngOnInit() {
    this.extendedIcons = Array(this.totalSets).fill(this.icons).flat();
  }

  reset() {
    const el = this.stripRef.nativeElement;
    const startY = -(this.lastIconIndex * this.iconHeight);

    const randomIndex = Math.floor(Math.random() * this.icons.length);
    const targetSet = this.totalSets - 3;
    const endY = -((targetSet * this.icons.length + randomIndex) * this.iconHeight);

    this.lastIconIndex = randomIndex;

    const animation = el.animate(
      [{ transform: `translateY(${startY}px)` }, { transform: `translateY(${endY}px)` }],
      {
        duration: this.timer,
        easing: 'cubic-bezier(0.25, 1.08, 0.5, 1)',
        fill: 'forwards',
      },
    );

    animation.onfinish = () => {
      this.onFinish.emit(randomIndex);
    };
  }
}
