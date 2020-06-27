import { createAction, props } from '@ngrx/store';
import { InfoMessage } from 'src/app/shared/models/UI/info-message.class';

export const setLoading = createAction(
  '[Layout] Set Loading',
  props<{ isLoading: boolean }>()
);
export const setInfoMessage = createAction(
  '[Layout] Set Info Message',
  props<{ infoMessage: InfoMessage }>()
);
