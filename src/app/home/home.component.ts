import { Component, ViewChild } from '@angular/core';
import { LoaderComponent } from '../shared/components/loader/loader.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild(LoaderComponent, { static: false }) loader!: LoaderComponent;
  constructor() {}
}
