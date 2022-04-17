import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() size = 60;
  @Input() animationDuration = 1000;
  @Input() color = '#2a9d8f';

  private _show = false;

  constructor() {}

  get show() {
    return this._show;
  }

  set show(isVisible: boolean) {
    this._show = isVisible;
  }

  get spinnerStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
    };
  }

  get circleStyle() {
    return {
      color: this.color,
      fontSize: `${this.size * 0.24}px`,
    };
  }

  get lineStyle() {
    return {
      animationDuration: `${this.animationDuration}ms`,
      borderLeftWidth: `${this.size / 25}px`,
      borderRightWidth: `${this.size / 25}px`,
      borderLeftColor: this.color,
    };
  }

  showOrHideSpinner(indicator: boolean) {
    this.show = indicator;
  }
}
