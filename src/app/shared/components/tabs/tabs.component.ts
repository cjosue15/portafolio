import {
  Component,
  ContentChildren,
  QueryList,
  AfterViewInit,
  ChangeDetectorRef,
  AfterContentChecked,
} from '@angular/core';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements AfterViewInit, AfterContentChecked {
  @ContentChildren(TabItemComponent) tabs!: QueryList<TabItemComponent>;

  tabs$: Observable<TabItemComponent[]>;

  activeTab: TabItemComponent | null;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    this.tabs$ = new Observable();
    this.activeTab = null;
  }

  ngAfterViewInit(): void {
    this.tabs$ = this.tabs.changes.pipe(
      startWith(''),
      map(() => this.tabs.toArray())
    );
    this._changeDetectorRef.detectChanges();
  }

  ngAfterContentChecked(): void {
    if (!this.activeTab) this.selectTab(this.tabs.first);
  }

  selectTab(tabItem: TabItemComponent) {
    if (this.activeTab === tabItem) return;

    if (this.activeTab) {
      this.tabs.forEach((tab) => (tab.active = false));
    }

    this.activeTab = tabItem;
    tabItem.active = true;
  }
}
