import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageData, Filters } from '../../models';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pageData: PageData;
  @Input() loading: boolean;
  @Output() search = new EventEmitter<Filters>();

  constructor() { }

  ngOnInit() {
  }

  toPage(n: number) {
    this.search.emit({ pageIndex: n } as Filters);
  }

  toPrev() {
    if (this.pageData.hasPrev) {
      this.search.emit({ pageIndex: this.pageData.index - 1 } as Filters);
    }
  }

  toNext() {
    if (this.pageData.hasNext) {
      this.search.emit({ pageIndex: this.pageData.index + 1 } as Filters);
    }
  }

  toLast() {
    if (!this.isLast()) {
      this.search.emit({ pageIndex: this.pageData.total } as Filters);
    }
  }

  toFirst() {
    if (!this.isFirst()) {
      this.search.emit({ pageIndex: 1 } as Filters);
    }
  }

  isLast(): boolean {
    return this.pageData.index === this.pageData.total;
  }

  isFirst(): boolean {
    return this.pageData.index === 1;
  }
}
