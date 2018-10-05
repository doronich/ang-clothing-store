import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { Order } from 'src/app/modules/orders/models';

@Component({
  selector: 'app-all-orders-table',
  templateUrl: './all-orders-table.component.html',
  styleUrls: ['./all-orders-table.component.css']
})
export class AllOrdersTableComponent implements OnInit {
  @ViewChild('buttons') buttonsTempl: TemplateRef<any>;
  @ViewChild('datatable') table: any;

  @Input() dataSource: Order[];
  @Output() remove = new EventEmitter<Order>();
  cols = [];
  expanded: any = {};

  constructor() {
  }

  ngOnInit() {
    this.cols = [
      { name: 'Actions', maxWidth: 100, cellTemplate: this.buttonsTempl },
      { prop: 'id', width: 30 },
      { prop: 'status', maxWidth: 120 },
      { prop: 'createdDate', name: 'Date' },
      { prop: 'totalPrice', name: 'Total price', maxWidth: 90 },
      { prop: 'code.discount', name: 'Discount', maxWidth: 70 },
      { prop: 'code.code', name: 'Code', maxWidth: 70 },
      { prop: 'username' },
      { prop: 'name' },
      { prop: 'email' },
      { name: 'Phone Number', prop: 'phoneNumber' },
      { prop: 'address' },
      { prop: 'comment' }
    ]

  }

}
