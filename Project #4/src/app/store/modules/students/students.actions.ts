import { Action } from '@ngrx/store';

export enum StudentsActionTypes {
  SEND_SUBSCRIPTION_REQUEST = '[send subscription] request',
  SEND_SUBSCRIPTION_SUCCESS = '[send subscription] success',
  SEND_SUBSCRIPTION_FAILURE = '[send subscription] failure',
}

// Subscribe teacher
export class SubscribeTeacherRequestAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_SUBSCRIPTION_REQUEST;

  constructor(public payload: any = null) {}
}

export class SubscribeTeacherSuccessAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_SUBSCRIPTION_SUCCESS;

  constructor(public payload: any) {}
}

export class SubscribeTeacherFailureAction implements Action {
  readonly type: string = StudentsActionTypes.SEND_SUBSCRIPTION_FAILURE;

  constructor(public payload: any) {}
}