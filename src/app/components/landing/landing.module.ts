import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MaterialModule } from '../.././material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LandingComponent
  ],
  declarations: [
    LandingComponent,
  ]
})
export class LandingModule { }
