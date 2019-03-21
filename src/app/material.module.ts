import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollingDirective } from './directives/scrolling.directive';

@NgModule({
  declarations: [
    ScrollingDirective,
  ],
  imports: [
    FlexLayoutModule,

    MatButtonModule
    ],
  exports: [
    FlexLayoutModule,
    ScrollingDirective,

    MatButtonModule
  ],
})

export class MaterialModule {}
