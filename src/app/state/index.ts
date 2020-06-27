import { InjectionToken } from '@angular/core';
import { ActionReducerMap, createFeatureSelector, createSelector, Action } from '@ngrx/store';

import * as fromUser from './reducers/user';
import * as fromLayout from './reducers/layout';

export interface IState {
  user: fromUser.IState;
  layout: fromLayout.IState;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<IState, Action>
>('root reducer token', {
  factory: () => ({
    user: fromUser.reducer,
    layout: fromLayout.reducer,
  }),
});

export const getUserState = createFeatureSelector<fromUser.IState>('user');
export const getLayoutState = createFeatureSelector<fromLayout.IState>(
  'layout'
);

export const GetUserInfo = createSelector(getUserState, fromUser.getUserInfo);
export const GetIsAuth = createSelector(getUserState, fromUser.getIsAuth);

export const GetIsLoading = createSelector(getLayoutState, fromLayout.getIsLoading);
export const GetInfoMessage = createSelector(getLayoutState, fromLayout.getInfoMessage);