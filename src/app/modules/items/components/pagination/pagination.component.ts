import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageData, Filters } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pageData: PageData;
  @Input() loading: boolean;
  @Output() search = new EventEmitter<Filters>();
  params: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(p => this.params = { ...p })
  }

  toPage(n: number) {
    this.search.emit({ pageIndex: n } as Filters);
    this.router.navigate(['/items'], { queryParams: { ...this.params, pageIndex: n } })
  }

  toPrev() {
    if (this.pageData.hasPrev) {
      this.search.emit({ pageIndex: this.pageData.index - 1 } as Filters);
      this.router.navigate(['/items'], { queryParams: { ...this.params, pageIndex: this.pageData.index - 1 } })
    }
  }

  toNext() {
    if (this.pageData.hasNext) {
      this.search.emit({ pageIndex: this.pageData.index + 1 } as Filters);
      this.router.navigate(['/items'], { queryParams: { ...this.params, pageIndex: this.pageData.index + 1 } })
    }
  }

  toLast() {
    if (!this.isLast()) {
      this.search.emit({ pageIndex: this.pageData.total } as Filters);
      this.router.navigate(['/items'], { queryParams: { ...this.params, pageIndex: this.pageData.total } })
    }
  }

  toFirst() {
    if (!this.isFirst()) {
      this.search.emit({ pageIndex: 1 } as Filters);
      this.router.navigate(['/items'], { queryParams: { ...this.params, pageIndex: 1 } })
    }
  }

  isLast(): boolean {
    return this.pageData.index === this.pageData.total;
  }

  isFirst(): boolean {
    return this.pageData.index === 1;
  }
}
