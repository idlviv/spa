import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messageForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
      ]),
    });
  }

}
