import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { CurrentItem } from '../../models/current-item';

@Component({
  selector: 'app-current-item',
  templateUrl: './current-item.component.html',
  styleUrls: ['./current-item.component.css']
})
export class CurrentItemComponent implements OnInit, OnChanges {



  @Input() id: number;
  @Input() error;
  @Input() item: CurrentItem;
  @Input() loading: boolean;
  @Input() inCart: boolean = false;
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();
  images = [];
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.item) {
      this.images = [this.item.previewImagePath]
      this.item.imagePath1 && this.images.push(this.item.imagePath1)
      this.item.imagePath2 && this.images.push(this.item.imagePath2)
      this.item.imagePath3 && this.images.push(this.item.imagePath3)
    }
  }
  addToCart() {
    this.add.emit();
    this.inCart = true;
  }

  removeFromCart() {
    this.remove.emit();
    this.inCart = false;
  }

}
