import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../models';

@Component({
  selector: 'app-order-items-list',
  templateUrl: './order-items-list.component.html',
  styleUrls: ['./order-items-list.component.css']
})
export class OrderItemsListComponent implements OnInit {

  @Input() orderItems: OrderItem[];
  constructor() { }

  ngOnInit() {

  }

}
