import {
  GetUserCardsFailureAction,
  GetUserCardsRequestAction,
  GetUserCardsSuccessAction,
  RemoveUserCardRequestAction,
  RemoveUserCardSuccessAction,
  RemoveUserCardFailureAction,
  SendStripeTokenFailureAction,
  SendStripeTokenRequestAction,
  SendStripeTokenSuccessAction,
} from '@src/app/store/modules/cards/cards.actions';

export type TCardsEntityReducer = {
  id: string;
  object: string;
  billing_details: {
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string;
      postal_code: number;
      state: string;
    };
    email: string;
    name: string;
    phone: string;
  };
  card: {
    brand: string;
    checks: {
      address_line1_check: any;
      address_postal_code_check: any;
      cvc_check: any;
    };
    country: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    generated_from: null;
    last4: string;
    three_d_secure_usage: {
      supported: boolean;
    };
    wallet: any;
  };
  created: number;
  customer: string;
  livemode: boolean;
  metadata: {};
  type: string;
};

export type TGetUserCardsActionsUnion =
  | GetUserCardsRequestAction
  | GetUserCardsSuccessAction
  | GetUserCardsFailureAction;

export type TRemoveUserCardsActionsUnion =
  | RemoveUserCardRequestAction
  | RemoveUserCardSuccessAction
  | RemoveUserCardFailureAction;

export type GetStripeTokensActionsUnion =
  | SendStripeTokenRequestAction
  | SendStripeTokenSuccessAction
  | SendStripeTokenFailureAction;

export type TCardsStatusReducer = null | string;
export type TCardsEntitiesReducer = TCardsEntityReducer[];
export type TCardsIdsReducer = number[];
export type TCardsErrorsReducer = any;

export interface ICardsReducerState {
  status: TCardsStatusReducer;
  entities: TCardsEntitiesReducer;
  ids: TCardsIdsReducer;
  errors: TCardsErrorsReducer;
}
