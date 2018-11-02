import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ItemForCart } from 'src/app/modules/items/models';


@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  @Input() ids: number[];
  @Output() changeAmount = new EventEmitter<{ id: number, value: number }>();
  @Output() getItems = new EventEmitter<number[]>();
  @Output() removeItem = new EventEmitter<number>();
  @Input() items: ItemForCart[];

  @Input() total: number = 0;
  constructor() { }

  ngOnInit() {
    this.getItems.emit(this.ids);

  }

  amountChange(ev, id: number) {
    let value = Number.parseInt(ev.target.value, 10);
    if (value <= 0) {
      ev.target.value = 1;
    }
    if (value > 100) ev.target.value = 100;

    value = Number.parseInt(ev.target.value, 10);

    this.changeAmount.emit({ id, value });
  }

  remove(id: number) {
    this.removeItem.emit(id);
  }

}

