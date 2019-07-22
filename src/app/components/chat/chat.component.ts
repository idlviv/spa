import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IChatMsg } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messageForm: FormGroup;
  msgs: IChatMsg[] = [
    {
      message: '1 - Lorem Ipsum является текст-заполнитель обычно',
      isOutgoing: true,
    },
    {
      message: '2 - Lorem Ipsum является текст-заполнитель обычно',
      isOutgoing: true,
    },
    {
      message: '3 - Lorem Ipsum является текст-заполнитель обычно',
      isOutgoing: false,
    },
    {
      message: '4 - Lorem Ipsum является текст-заполнитель обычно',
      isOutgoing: false,
    },
    {
      message: '5 - Lorem Ipsum является текст-заполнитель обычно',
      isOutgoing: true,
    },
    {
      message: '6 - Lorem Ipsum является текст-заполнитель обычно',
      isOutgoing: true,
    },
  ];
  constructor() { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
      ]),
    });
  }

}
