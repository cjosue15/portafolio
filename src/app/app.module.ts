import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, BrowserAnimationsModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
