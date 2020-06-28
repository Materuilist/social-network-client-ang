import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/state';
import { initAuth } from 'src/app/state/actions/user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  isRegister: boolean = false;

  form = this.formBuilder.group({
    login: [''],
    password: [''],
  });

  constructor(private formBuilder: FormBuilder, private store: Store<IState>) {}

  onSubmit(event) {
    event.preventDefault();
    const { login, password } = this.form.value;
    this.store.dispatch(
      initAuth({ login, password, isRegister: this.isRegister })
    );
  }

  onChangeMode(event) {
    this.isRegister = !this.isRegister;
  }
}
