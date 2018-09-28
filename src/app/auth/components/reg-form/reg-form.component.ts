import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegModel, CheckUserModel } from '../../models/auth';
import { PasswordValidation } from '../../helpers';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit, OnChanges {
  ngOnChanges(): void {
    if (this.exist != null && !this.exist) {
      setTimeout(() => this.submitted.emit(this.form.value), 0);
    }
  }

  title = "Sign Up"
  @Input() pending: boolean;
  @Input() errorMessage: string | null;
  @Output() check = new EventEmitter<CheckUserModel>();
  @Output() submitted = new EventEmitter<RegModel>();
  @Input() exist: boolean;
  canSubmit: boolean;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      login: new FormControl("", [Validators.required, Validators.minLength(6)]),
      password: new FormControl("", [Validators.required, Validators.pattern(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/)]),
      confirmPassword: new FormControl("", [Validators.required]),
      firstName: new FormControl(""),
      lastName: new FormControl("")
    },
      {
        validator: PasswordValidation.MatchPassword
      })
  }

  submit() {
    if (this.form.valid) {
      this.check.emit(this.form.value);
      this.form.controls['password'].reset();
      this.form.controls['confirmPassword'].reset();
      //this.form.reset();
    }
  }

}
