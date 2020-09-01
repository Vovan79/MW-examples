import { AuthenticationActionTypes } from '@src/app/store/modules/authentication/authentication.actions';
import { CardsActionTypes } from '@src/app/store/modules/cards/cards.actions';
import { ActionReducer, combineReducers } from '@ngrx/store';
import {
  ICardsReducerState,
  TCardsEntitiesReducer,
  TCardsErrorsReducer,
  TCardsIdsReducer,
  TCardsStatusReducer,
  TGetUserCardsActionsUnion,
  TRemoveUserCardsActionsUnion,
  GetStripeTokensActionsUnion,
} from '@src/app/store/modules/cards/cards.types';
import { TStudentsActionsUnion } from '@src/app/store/modules/students/students.types';
import { RequestStatus } from '@src/app/services/api.service.interface';

const initialState_status: TCardsStatusReducer = null;
const status = (state = initialState_status, { type }: TGetUserCardsActionsUnion | TRemoveUserCardsActionsUnion | GetStripeTokensActionsUnion): TCardsStatusReducer => {
  switch (type) {
    case CardsActionTypes.GET_USERS_CARDS_REQUEST:
    case CardsActionTypes.REMOVE_CARD_REQUEST:
    case CardsActionTypes.SEND_STRIPE_TOKEN_REQUEST:
      return RequestStatus.pending;

    case CardsActionTypes.GET_USERS_CARDS_SUCCESS:
    case CardsActionTypes.REMOVE_CARD_SUCCESS:
    case CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS:
      return RequestStatus.success;

    case CardsActionTypes.GET_USERS_CARDS_FAILURE:
    case CardsActionTypes.REMOVE_CARD_FAILURE:
    case CardsActionTypes.SEND_STRIPE_TOKEN_FAILURE:
      return RequestStatus.failure;

    default:
      return state;
  }
};

const initialState_entities: TCardsEntitiesReducer = [];
const entities = (
  state = initialState_entities,
  { type, payload }: TGetUserCardsActionsUnion | TRemoveUserCardsActionsUnion | TStudentsActionsUnion
): TCardsEntitiesReducer => {
  switch (type) {
    case CardsActionTypes.GET_USERS_CARDS_SUCCESS:
      return payload.entities.cards;

    case CardsActionTypes.REMOVE_CARD_SUCCESS:
    {
      const result = Object.assign({}, state);
      delete result[payload];
      return result;
    }

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const initialState_ids: TCardsIdsReducer = [];
const ids = (state = initialState_ids, { type, payload }: TGetUserCardsActionsUnion | TRemoveUserCardsActionsUnion): TCardsIdsReducer => {
  switch (type) {
    case CardsActionTypes.GET_USERS_CARDS_SUCCESS:
      return payload.result;

    case CardsActionTypes.REMOVE_CARD_SUCCESS:
      return state.filter((item) => item !== payload);

    case CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS:
      return payload.result;

    case AuthenticationActionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const initialState_errors: TCardsErrorsReducer = null;
const errors = (state = initialState_errors, { type, payload }: TGetUserCardsActionsUnion ): TCardsErrorsReducer => {
  switch (type) {
    case CardsActionTypes.GET_USERS_CARDS_REQUEST:
    case CardsActionTypes.REMOVE_CARD_REQUEST:
    case CardsActionTypes.SEND_STRIPE_TOKEN_REQUEST:
      return initialState_errors;

    case CardsActionTypes.GET_USERS_CARDS_SUCCESS:
    case CardsActionTypes.REMOVE_CARD_SUCCESS:
    case CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS:
      return initialState_errors;

    case CardsActionTypes.GET_USERS_CARDS_FAILURE:
    case CardsActionTypes.REMOVE_CARD_FAILURE:
    case CardsActionTypes.SEND_STRIPE_TOKEN_FAILURE:
      return payload.message;

    default:
      return state;
  }
};

export const cardsReducers: ActionReducer<ICardsReducerState> = combineReducers({
  status,
  entities,
  ids,
  errors,
});
