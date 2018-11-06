import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {
  @Output() open = new EventEmitter();
  @Input() isOpened: boolean;
  constructor() { }

  ngOnInit() {
  }

}
