import { Component, OnInit, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/modules/auth/models/user';
import { UserInfo, CreateOrder, CreateOrderItem } from '../../models';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemForCart } from 'src/app/modules/items/models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnChanges {

  @Input() user: User;
  @Input() total: number;
  @Input() userLoading;
  @Input() error;
  @Input() userDetails: UserInfo;
  @Input() checkoutLoading: boolean;
  @Output() getUserInfo = new EventEmitter<string>();
  @Output() checkCode = new EventEmitter<string>();
  @Output() createOrder = new EventEmitter<CreateOrder>();
  @Input() items: ItemForCart[];
  @Input() codeConfirmed: boolean = false;
  currentCode: string;
  form: FormGroup;
  button: string = "Check";


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required]),
      address: new FormControl(""),
      comment: new FormControl(""),
      code: new FormControl(""),
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.userDetails && this.userDetails && this.form) {
      this.form.setValue({
        name: this.userDetails.firstName,
        phone: this.userDetails.phoneNumber,
        address: "",
        code: "",
        comment: ""
      })
    }

    if (this.form && this.codeConfirmed) {
      this.currentCode = this.form.value.code;
      this.form.get('code').disable();
      this.button = "Ok";
    }
  }

  submit(ev) {
    ev.preventDefault();
    const order = {
      username: this.user.username,
      name: this.form.value.name,
      items: this.items.map(item => {
        return {
          amount: item.amount,
          itemId: item.id,
          name: item.name,
          price: item.price
        } as CreateOrderItem;
      }),
      phoneNumber: this.form.value.phone,
      address: this.form.value.address,
      comment: this.form.value.comment,
      email: this.userDetails.email,
      totalPrice: this.total,
      code: this.codeConfirmed ? this.currentCode : null
    } as CreateOrder;
    this.createOrder.emit(order);
  }

  check(ev) {
    ev.preventDefault();
    const code = this.form.value.code;
    if (code) {
      this.checkCode.emit(code);
    }
  }

}
