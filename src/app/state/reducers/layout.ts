import { InfoMessage } from 'src/app/shared/models/UI/info-message.class';
import { createReducer, on } from '@ngrx/store';
import { setLoading, setInfoMessage } from '../actions/layout';

export interface IState {
  isLoading: boolean;
  infoMessage: InfoMessage;
}

const initialState: IState = {
  isLoading: false,
  infoMessage: null,
};

export const reducer = createReducer(
  initialState,
  on(setLoading, (state, { isLoading }) => ({ ...state, isLoading })),
  on(setInfoMessage, (state, { infoMessage }) => ({ ...state, infoMessage }))
);

export const getIsLoading = (state: IState) => state.isLoading;
export const getInfoMessage = (state: IState) => state.infoMessage;