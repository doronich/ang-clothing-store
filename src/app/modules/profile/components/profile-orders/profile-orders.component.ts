import { Component, OnInit, Input } from '@angular/core';
import { UserOrder } from '../../models';

@Component({
  selector: 'app-profile-orders',
  templateUrl: './profile-orders.component.html',
  styleUrls: ['./profile-orders.component.css']
})
export class ProfileOrdersComponent implements OnInit {
  @Input() orders: UserOrder[];
  cols = [];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { prop: 'id', width: 30 },
      { prop: 'name' },
      { prop: 'address' },
      { name: 'Phone Number', prop: 'phoneNumber' },
      { prop: 'comment' },
      { prop: 'totalPrice', name: '$ Total price', maxWidth: 90 },
      { prop: 'status', maxWidth: 120 },
      { prop: 'discount', name: '% Discount', maxWidth: 80 },
      { prop: 'code', name: 'Code', maxWidth: 70 },
      { prop: 'createDate', name: 'Date' },
    ]
  }

}
