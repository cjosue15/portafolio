import { Component, ViewChild } from '@angular/core';
import { socialMediaURLS, URLS } from '../models/social-media.enum';
import { LoaderComponent } from '../shared/components/loader/loader.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  socialMedia: URLS;
  @ViewChild(LoaderComponent, { static: false }) loader!: LoaderComponent;

  constructor() {
    this.socialMedia = {
      ...socialMediaURLS,
    };
  }

  ngAfterViewInit(): void {
    this.loader.showOrHideSpinner(true);
    setTimeout(() => {
      this.loader.showOrHideSpinner(false);
    }, 3000);
  }
}
