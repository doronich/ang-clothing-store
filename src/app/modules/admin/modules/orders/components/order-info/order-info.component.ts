import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order, UpdateOrder } from '../../models';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss']
})
export class OrderInfoComponent implements OnInit {

  @Output() update = new EventEmitter<UpdateOrder>();
  @Input() order: Order;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      phoneNumber: new FormControl(this.order.phoneNumber),
      name: new FormControl(this.order.name),
      address: new FormControl(this.order.address),
      status: new FormControl(this.order.status)
    })
  }

  submit() {

    const updOrder: UpdateOrder = {
      id: this.order.id,
      name: this.form.value.name,
      address: this.form.value.address,
      status: this.form.value.status,
      phoneNumber: this.form.value.phoneNumber
    }
    this.update.emit(updOrder);
  }
}
