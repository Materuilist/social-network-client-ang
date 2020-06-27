import { createReducer, on } from '@ngrx/store';

import { UserInfo } from 'src/app/shared/models/entities/userInfo.class';
import { setUserInfo, setAuth } from '../actions/user';

export interface IState {
  userInfo: UserInfo;
  isAuth: boolean;
}

const initialState: IState = {
  userInfo: null,
  isAuth: false,
};

export const reducer = createReducer(
  initialState,
  on(setUserInfo, (state, { userInfo }) => ({ ...state, userInfo })),
  on(setAuth, (state, { isAuth }) => ({ ...state, isAuth }))
);

export const getUserInfo = (state: IState) => state.userInfo;
export const getIsAuth = (state: IState) => state.isAuth;