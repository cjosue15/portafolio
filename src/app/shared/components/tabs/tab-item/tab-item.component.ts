import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(600, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class TabItemComponent {
  @Input() label: string;

  @Input() active: boolean;

  constructor() {
    this.label = '';
    this.active = false;
  }
}
