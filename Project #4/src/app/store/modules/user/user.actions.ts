import { Action } from '@ngrx/store';

export enum UserActionTypes {
  UPDATE_USER_CONTACT_DETAILS_REQUEST = '[update user contact details] request',
  UPDATE_USER_CONTACT_DETAILS_SUCCESS = '[update user contact details] success',
  UPDATE_USER_CONTACT_DETAILS_FAILURE = '[update user contact details] failure',

  UPDATE_USER_PASSWORD_REQUEST = '[update user password] request',
  UPDATE_USER_PASSWORD_SUCCESS = '[update user password] success',
  UPDATE_USER_PASSWORD_FAILURE = '[update user password] failure',
}

// Update user contact details
export class UpdateUserContactDetailsRequestAction implements Action {
  readonly type: string = UserActionTypes.UPDATE_USER_CONTACT_DETAILS_REQUEST;

  constructor(public payload: any = null) {}
}

export class UpdateUserContactDetailsSuccessAction implements Action {
  readonly type: string = UserActionTypes.UPDATE_USER_CONTACT_DETAILS_SUCCESS;

  constructor(public payload: any) {}
}

export class UpdateUserContactDetailsFailureAction implements Action {
  readonly type: string = UserActionTypes.UPDATE_USER_CONTACT_DETAILS_FAILURE;

  constructor(public payload: any) {}
}

// Update password details
export class UpdateUserPasswordRequestAction implements Action {
  readonly type: string = UserActionTypes.UPDATE_USER_PASSWORD_REQUEST;

  constructor(public payload: any = null) {}
}

export class UpdateUserPasswordSuccessAction implements Action {
  readonly type: string = UserActionTypes.UPDATE_USER_PASSWORD_SUCCESS;

  constructor(public payload: any) {}
}

export class UpdateUserPasswordFailureAction implements Action {
  readonly type: string = UserActionTypes.UPDATE_USER_PASSWORD_FAILURE;

  constructor(public payload: any) {}
}
