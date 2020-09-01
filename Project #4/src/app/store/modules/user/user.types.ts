import {
  UpdateUserContactDetailsRequestAction,
  UpdateUserContactDetailsSuccessAction,
  UpdateUserContactDetailsFailureAction,
  UpdateUserPasswordRequestAction,
  UpdateUserPasswordSuccessAction,
  UpdateUserPasswordFailureAction
} from './user.actions';

// Actions
export type TUpdateUserContactDetailsActionsUnion =
  | UpdateUserContactDetailsRequestAction
  | UpdateUserContactDetailsSuccessAction
  | UpdateUserContactDetailsFailureAction;

export type TUpdateUserPasswordActionsUnion =
  | UpdateUserPasswordRequestAction
  | UpdateUserPasswordSuccessAction
  | UpdateUserPasswordFailureAction;

export type TUserActionsUnion =
  | TUpdateUserContactDetailsActionsUnion
  | TUpdateUserPasswordActionsUnion;