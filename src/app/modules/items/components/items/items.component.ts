import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() items = [];
  @Input() loading;
  @Input() error = null;
  @Input() isLoggedIn;
  @Input() cartItems;
  @Output() removeFromCart = new EventEmitter<number>();
  @Output() addToCart = new EventEmitter<number>();
  @Output() addFav = new EventEmitter<number>();
  @Output() removeFav = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  checkForCart(id: number, arr: number[]): boolean {
    if (arr !== null) {
      return arr.includes(id)
    }
    return false;
  }
}
