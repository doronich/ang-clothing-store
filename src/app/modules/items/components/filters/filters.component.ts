import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Filters, SubCategory, Category } from '../../models';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() search = new EventEmitter<Filters>();
  @Input() categories: Category[];
  @Input() loading;
  @Input() subCategories: SubCategory[];
  @Input() filters: Filters;
  currentSubs: SubCategory[];
  form: FormGroup;
  pageSizeChanged: boolean = false;
  @Input() pageSize: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl(this.filters.name || ''),
      pageSize: new FormControl(this.pageSize),
      category: new FormControl(this.filters.kind),
      subCategory: new FormControl(this.filters.subkind),
      gender: new FormControl(this.filters.sex || 'male'),
      maxPrice: new FormControl(this.filters.endPrice || 1000),
      minPrice: new FormControl(this.filters.startPrice || 0)
    })
    this.search.emit({ pageSize: this.pageSize } as Filters);
  }

  submit() {
    const filters: Filters = {
      name: this.form.value.name,
      pageSize: this.form.value.pageSize,
      kind: this.form.value.category,
      subkind: this.form.value.subCategory,
      sex: this.form.value.gender,
      startPrice: this.form.value.minPrice,
      endPrice: this.form.value.maxPrice
    } as Filters;
    filters.pageIndex = 1;
    /*     if (this.pageSizeChanged) {
          filters.pageIndex = 1;
          this.pageSizeChanged = false;
        } */
    this.search.emit(filters);
  }

  clear(event) {
    event.preventDefault();

    this.form.setValue({
      name: '',
      pageSize: this.pageSize,
      category: null,
      subCategory: null,
      maxPrice: 1000,
      minPrice: 0,
      gender: 'male'
    })
  }

  selectCategory(event) {
    if (event.value !== undefined) {
      const categoryId: number = Number.parseInt(event.value, 10);
      this.currentSubs = this.subCategories.filter(i => i.categoryId === categoryId);
      this.form.setValue({
        ...this.form.value,
        subCategory: null
      })
    }

  }

  changePageSize($event) {
    this.pageSizeChanged = true;
  }

}
