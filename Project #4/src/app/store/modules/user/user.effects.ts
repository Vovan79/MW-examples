import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '@src/app/services/user/user.service';
import {
  UserActionTypes,
  UpdateUserContactDetailsFailureAction,
  UpdateUserContactDetailsSuccessAction,
  UpdateUserPasswordSuccessAction, UpdateUserPasswordFailureAction
} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    protected actions$: Actions, 
    protected userService: UserService,
    protected router: Router
  ) {}

  // Update user contact details
  @Effect()
  protected updateContactDetails = this.actions$.pipe(
    ofType(UserActionTypes.UPDATE_USER_CONTACT_DETAILS_REQUEST),
    exhaustMap(({ payload }: any) =>
      this.userService.updateContactDetails(payload).pipe(
        map((response: any) => {
          new UpdateUserContactDetailsSuccessAction(response)
        }),
        catchError(error => of(new UpdateUserContactDetailsFailureAction(error)))
      )
    )
  );

  // Update user contact details
  @Effect()
  protected updatePassword = this.actions$.pipe(
    ofType(UserActionTypes.UPDATE_USER_PASSWORD_REQUEST),
    exhaustMap(({ payload }: any) =>
      this.userService.updatePassword(payload).pipe(
        map((response: any) => new UpdateUserPasswordSuccessAction(response)),
        catchError(error => of(new UpdateUserPasswordFailureAction(error)))
      )
    )
  );
}
