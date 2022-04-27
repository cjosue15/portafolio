import { Component, ViewChild } from '@angular/core';
import { SocialMedia, SocialMediaURLS } from '../models/social-media.enum';
import { LoaderComponent } from '../shared/components/loader/loader.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  SocialMediaEnum: typeof SocialMedia = SocialMedia;
  @ViewChild(LoaderComponent, { static: false }) loader!: LoaderComponent;

  openSocialMedia(social: SocialMedia): void {
    switch (social) {
      case SocialMedia.GITHUB:
        this.openNewWindow(SocialMediaURLS.github);
        break;
      case SocialMedia.YOUTUBE:
        this.openNewWindow(SocialMediaURLS.youtube);
        break;
      default:
        this.openNewWindow(SocialMediaURLS.linkedin);
        break;
    }
  }

  openNewWindow(url: string): void {
    window.open(url, '_blank');
  }
}
