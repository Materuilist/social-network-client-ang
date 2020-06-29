import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IState, GetUserInfo } from 'src/app/state';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models/entities/userInfo.class';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public userInfo$:Observable<UserInfo> = this.store.pipe(select(GetUserInfo));
  
  constructor(private store: Store<IState>, private userService:UserService) {}

  public logout(){
    this.userService.logout();
  }
}
