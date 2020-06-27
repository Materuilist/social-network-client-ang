import { createAction, props } from '@ngrx/store';
import { UserInfo } from 'src/app/shared/models/entities/userInfo.class';

export const setUserInfo = createAction(
  '[User] Set User Info',
  props<{ userInfo: UserInfo }>()
);
export const initAuth = createAction(
  '[User] Init Auth',
  props<{ login: string; password: string; isRegister: boolean }>()
);
export const setAuth = createAction(
  '[User] Set Auth',
  props<{ isAuth: boolean }>()
);
