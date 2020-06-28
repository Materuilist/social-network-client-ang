import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';

import { initAuth, setUserInfo, setAuth } from '../actions/user';
import { UserService } from 'src/app/shared/services/user.service';
import { setInfoMessage } from '../actions/layout';
import {
  InfoMessage,
  InfoMessageTypes,
} from 'src/app/shared/models/UI/info-message.class';
import { Store } from '@ngrx/store';
import { IState } from '..';
import { UserInfo } from 'src/app/shared/models/entities/userInfo.class';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  initAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initAuth),
      exhaustMap(({ login, password, isRegister }) =>
        this.userService.authenticate(login, password, isRegister).pipe(
          map((response: any) => {
            if (typeof response === 'string') {
              return setInfoMessage({
                infoMessage: new InfoMessage(
                  response.toString(),
                  InfoMessageTypes.Error
                ),
              });
            }
            const { login, avatar, requestedFriends, friends } = response.user;
            this.store.dispatch(
              setUserInfo({
                userInfo: new UserInfo(
                  login,
                  avatar,
                  requestedFriends,
                  friends
                ),
              })
            );
            localStorage.setItem('jwt', response.jwt);
            this.router.navigateByUrl('/main');
            return setInfoMessage({
              infoMessage: new InfoMessage(
                'Авторизация прошла успешно!',
                InfoMessageTypes.Success
              ),
            });
          })
        )
      )
    )
  );

  userInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setUserInfo),
      map(({ userInfo }) => setAuth({ isAuth: userInfo !== null }))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store<IState>,
    private router:Router
  ) {}
}
