import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { UserInfo } from 'src/app/modules/admin/modules/orders/models';
import { User } from 'src/app/modules/auth/models/user';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit, OnChanges {

  @Input() userData: UserInfo;
  @Input() user: User;
  @Output() changeUser = new EventEmitter<UserInfo>();
  @Input() error: any;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userData) {
      this.form = this.formBuilder.group({
        firstName: new FormControl(this.userData.firstName),
        surname: new FormControl(this.userData.lastName),
        phone: new FormControl(this.userData.phoneNumber)
      })
    }
  }

  changeData(ev) {
    ev.preventDefault();
    const data: UserInfo = {
      ...this.userData,
      firstName: this.form.value.firstName,
      lastName: this.form.value.surname,
      phoneNumber: this.form.value.phone
    }
    this.changeUser.emit(data);
  }


}
