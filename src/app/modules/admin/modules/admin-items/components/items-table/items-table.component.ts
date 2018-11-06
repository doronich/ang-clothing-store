import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {
  @Input() items = [];
  @Input() error = "null";
  @Output() deleteItem = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
