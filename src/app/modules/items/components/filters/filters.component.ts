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
  currentSubs: SubCategory[];
  form: FormGroup;
  pageSizeChanged: boolean = false;
  readonly pageSize: number = 5;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      pageSize: new FormControl(this.pageSize),
      category: new FormControl(),
      subCategory: new FormControl(),
      gender: new FormControl('male'),
      maxPrice: new FormControl(1000),
      minPrice: new FormControl(0)
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
    if (this.pageSizeChanged) {
      filters.pageIndex = 1;
      this.pageSizeChanged = false;
    }
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
