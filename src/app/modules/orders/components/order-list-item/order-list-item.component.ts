import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
