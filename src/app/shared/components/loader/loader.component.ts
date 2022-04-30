import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input() size = 60;
  @Input() animationDuration = 1000;
  @Input() color = '';

  private _show = false;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

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
    this._changeDetectorRef.detectChanges();
  }
}
