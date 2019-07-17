import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { MaterialModule } from '../.././material.module';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChatModule,
  ],
  exports: [
    HomepageComponent,
  ],
  declarations: [
    HomepageComponent,
  ]
})
export class HomepageModule { }
