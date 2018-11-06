import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../models';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() loggedIn: boolean;
  @Input() messages: Message[] = [];
  @Output() sendMessage = new EventEmitter<string>();
  @Output() changeInput = new EventEmitter();
  @Input() typing: boolean = false;
  @Input() users: string[] = [];
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      message: new FormControl('')
    })
  }

  send(ev) {
    ev.preventDefault();

    const message = this.form.value.message;

    if (message) {
      this.sendMessage.emit(message);
      this.form.setValue({ message: '' });
    }
  }

}
