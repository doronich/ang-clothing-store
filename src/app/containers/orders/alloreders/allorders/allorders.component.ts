import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../core/services';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAll()
      .subscribe(data => console.log('All orders: Ok', data),
        err => console.log('All order err:', err));
  }

}
