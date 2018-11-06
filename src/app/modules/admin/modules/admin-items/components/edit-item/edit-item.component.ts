import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EditItem } from '../../models';
import { Category, SubCategory } from 'src/app/modules/items/models';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { genderDefenition } from '../../helpers';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit, OnChanges {

  @Input() isCreate: boolean;
  @Output() update = new EventEmitter();
  @Output() create = new EventEmitter();
  @Input() data: EditItem;
  @Input() cats: Category[] = [];
  @Input() subs: SubCategory[] = [];
  currentSubs: SubCategory[];
  form: FormGroup;
  images = {
    previewImagePath: null,
    imagePath1: null,
    imagePath2: null,
    imagePath3: null
  };
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      active: new FormControl(false),
      color: new FormControl(''),
      size: new FormControl(''),
      price: new FormControl(0, [Validators.required]),
      discount: new FormControl(0),
      brand: new FormControl(''),
      sex: new FormControl(0),
      category: new FormControl(0),
      subCategory: new FormControl(0)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isCreate && this.data) {

      this.images = {
        previewImagePath: this.data.previewImagePath,
        imagePath1: this.data.imagePath1,
        imagePath2: this.data.imagePath2,
        imagePath3: this.data.imagePath3,
      }

      this.form.setValue({
        name: this.data.name,
        active: this.data.active,
        description: this.data.description,
        color: this.data.color,
        size: this.data.size,
        price: this.data.price,
        discount: this.data.discount,
        brand: this.data.brand,
        sex: this.data.sex,
        category: this.data.kind,
        subCategory: this.data.subkind
      })
    }
    if (this.cats.length > 0 && this.data) {
      this.currentSubs = this.subs.filter(i => i.categoryId === this.data.kind)
    }
  }

  submitItem(ev) {
    ev.preventDefault();

    let data: EditItem = {
      ...this.form.value,
      kind: this.form.value.category,
      subkind: this.form.value.subCategory
    };
    if (this.isCreate) {
      data = {
        ...data,
        previewImagePath: this.images.previewImagePath,
        imagePath1: this.images.imagePath1,
        imagePath2: this.images.imagePath2,
        imagePath3: this.images.imagePath3
      }

      this.create.emit(data)
    } else {
      data = {
        ...this.data,
        ...data,
        previewImagePath: this.images.previewImagePath,
        imagePath1: this.images.imagePath1,
        imagePath2: this.images.imagePath2,
        imagePath3: this.images.imagePath3,
      }

      this.update.emit(data)
    }
  }

  encodeImageFileAsURL(event, number) {
    const file = event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onloadend = () => {
        switch (number) {
          case 0: {
            this.images.previewImagePath = reader.result;
            break;
          }
          case 1: this.images.imagePath1 = reader.result
            break;
          case 2: this.images.imagePath2 = reader.result
            break;
          case 3: this.images.imagePath3 = reader.result
            break;
          default:
            break;
        }
      }
      reader.readAsDataURL(file);
    } else {
      switch (number) {
        case 0: {
          this.images.previewImagePath = null;

          break;
        }
        case 1: this.images.imagePath1 = null
          break;
        case 2: this.images.imagePath2 = null
          break;
        case 3: this.images.imagePath3 = null
          break;
        default:
          break;
      }
    }

  }

  selectCategory(event) {
    if (event.value !== undefined) {
      const categoryId: number = Number.parseInt(event.value, 10);
      this.currentSubs = this.subs.filter(i => i.categoryId === categoryId);
      this.form.setValue({
        ...this.form.value,
        subCategory: null
      })
    }

  }

}
