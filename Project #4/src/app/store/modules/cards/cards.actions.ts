import { Action } from '@ngrx/store';

export enum CardsActionTypes {
  GET_USERS_CARDS_REQUEST = '[get user cards] request',
  GET_USERS_CARDS_SUCCESS = '[get user cards] success',
  GET_USERS_CARDS_FAILURE = '[get user cards] failure',

  REMOVE_CARD_REQUEST = '[remove credit card] request',
  REMOVE_CARD_SUCCESS = '[remove credit card] success',
  REMOVE_CARD_FAILURE = '[remove credit card] failure',

  SEND_STRIPE_TOKEN_REQUEST = '[send stripe token] request',
  SEND_STRIPE_TOKEN_SUCCESS = '[send stripe token] success',
  SEND_STRIPE_TOKEN_FAILURE = '[send stripe token] failure',
}

export class GetUserCardsRequestAction implements Action {
  readonly type: string = CardsActionTypes.GET_USERS_CARDS_REQUEST;

  constructor(public payload: any = null) {}
}

export class GetUserCardsSuccessAction implements Action {
  readonly type: string = CardsActionTypes.GET_USERS_CARDS_SUCCESS;

  constructor(public payload: any) {}
}

export class GetUserCardsFailureAction implements Action {
  readonly type: string = CardsActionTypes.GET_USERS_CARDS_FAILURE;

  constructor(public payload: any) {}
}

// Remove credit card
export class RemoveUserCardRequestAction implements Action {
  readonly type: string = CardsActionTypes.REMOVE_CARD_REQUEST;

  constructor(public payload: string) {}
}

export class RemoveUserCardSuccessAction implements Action {
  readonly type: string = CardsActionTypes.REMOVE_CARD_SUCCESS;

  constructor(public payload: string) {}
}

export class RemoveUserCardFailureAction implements Action {
  readonly type: string = CardsActionTypes.REMOVE_CARD_FAILURE;

  constructor(public payload: string) {}
}

// Send stripe token to the server
export class SendStripeTokenRequestAction implements Action {
  readonly type: string = CardsActionTypes.SEND_STRIPE_TOKEN_REQUEST;

  constructor(public payload: any) {}
}

export class SendStripeTokenSuccessAction implements Action {
  readonly type: string = CardsActionTypes.SEND_STRIPE_TOKEN_SUCCESS;

  constructor(public payload: any) {}
}

export class SendStripeTokenFailureAction implements Action {
  readonly type: string = CardsActionTypes.SEND_STRIPE_TOKEN_FAILURE;

  constructor(public payload: any) {}
}
