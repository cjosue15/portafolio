import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ProfileModule } from './components/profile/profile.module';
import { ButtonModule } from '../shared/components/button/button.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ProfileModule, ButtonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
