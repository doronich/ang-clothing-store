import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() isLoggedIn: boolean | null = null;
  @Input() inCart: boolean = false;
  @Output() addToCart = new EventEmitter<number>();
  @Output() removeFromCart = new EventEmitter<number>();
  @Output() addFav = new EventEmitter<number>();
  @Output() removeFav = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
