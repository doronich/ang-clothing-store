import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoginModel } from '../../models/auth';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @Input() pending: boolean;
  @Input() errorMessage: string | null;
  @Output() submitted = new EventEmitter<LoginModel>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })

  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value)
    }
  }

}
