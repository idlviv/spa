import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatInputModule,
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingDirective } from './directives/scrolling.directive';
import { OnScrollAnimationDirective } from './directives/on-scroll-animation.directive';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ScrollingDirective,
    OnScrollAnimationDirective,

  ],
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,

    // BrowserModule,
    // BrowserAnimationsModule,
    ],
  exports: [
    FlexLayoutModule,
    ScrollingDirective,
    OnScrollAnimationDirective,
    MatButtonModule,
    MatIconModule,
    MatInputModule,

  ],
})

export class MaterialModule {}
