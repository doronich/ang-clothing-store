import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ChangePasswordModel } from '../../models';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from 'src/app/modules/auth/helpers';

@Component({
  selector: 'app-profile-password',
  templateUrl: './profile-password.component.html',
  styleUrls: ['./profile-password.component.css']
})
export class ProfilePasswordComponent implements OnInit {
  @Output() changePassword = new EventEmitter<ChangePasswordModel>();
  @Input() message: any;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      curPass: new FormControl(null, [Validators.required,]),
      password: new FormControl("", [Validators.required, Validators.pattern(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/)]),
      confirmPassword: new FormControl("", [Validators.required])
    },
      {
        validator: PasswordValidation.MatchPassword
      })
  }

  changePass(ev) {
    ev.preventDefault();
    const data = {
      currentPassword: this.form.value.curPass,
      newPassword: this.form.value.password
    } as ChangePasswordModel;

    this.changePassword.emit(data);
    this.form.controls['curPass'].reset();
    this.form.controls['password'].reset();
    this.form.controls['confirmPassword'].reset();
  }
}
