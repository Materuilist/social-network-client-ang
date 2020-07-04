import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, BehaviorSubject } from 'rxjs';
// import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { UserService } from 'src/app/shared/services/user.service';
import { IState, GetIsLoading } from 'src/app/state';
import { IFriendInfo } from 'src/app/shared/models/entities/friendInfo.interface';

@Component({
  selector: 'app-friends-search',
  templateUrl: './friends-search.component.html',
  styleUrls: ['./friends-search.component.scss'],
})
export class FriendsSearchComponent implements OnInit {
  public users$: BehaviorSubject<IFriendInfo[]> = new BehaviorSubject<
    IFriendInfo[]
  >(null);
  public isLoading$: Observable<boolean> = this.store.pipe(
    select(GetIsLoading)
  );

  constructor(private store: Store<IState>, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => this.users$.next(users));
  }
}
