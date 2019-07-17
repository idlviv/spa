import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ChatComponent
  ],
  declarations: [
    ChatComponent
  ],
})

export class ChatModule { }
