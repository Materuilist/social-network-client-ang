import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from './state';
import { initAuth } from './state/actions/user';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<IState>, private userService: UserService) {}

  ngOnInit() {
    this.userService.ping();
  }

  onSubmit(event) {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    this.store.dispatch(initAuth({ login, password, isRegister: false }));
  }
}
