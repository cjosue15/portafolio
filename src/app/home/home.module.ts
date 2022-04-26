import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ProfileModule } from './components/profile/profile.module';
import { ButtonModule } from '../shared/components/button/button.module';
import { TabsModule } from '../shared/components/tabs/tabs.module';
import { TabItemModule } from '../shared/components/tabs/tab-item/tab-item.module';
import { LoaderModule } from '../shared/components/loader/loader.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ProfileModule,
    ButtonModule,
    TabsModule,
    TabItemModule,
    LoaderModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
