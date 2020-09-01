import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { normalize } from 'normalizr';
import {
  SubscribeTeacherFailureAction,
  SubscribeTeacherRequestAction
} from './students.actions';
import { cardsSchema } from '@src/app/store/modules/cards/cards.schema';

@Injectable()
export class StudentsEffects {
  constructor(protected actions$: Actions, protected router: Router, protected studentService: StudentService) {
  }

  @Effect({dispatch: false})
  protected getStudentsListSuccess: Observable<any> = this.actions$.pipe(
    ofType<GetStudentsListRequestAction>(StudentsActionTypes.GET_STUDENTS_LIST_SUCCESS)
  );

  @Effect({dispatch: false})
  protected getStudentsListFailure: Observable<any> = this.actions$.pipe(
    ofType<GetStudentsListRequestAction>(StudentsActionTypes.GET_STUDENTS_LIST_FAILURE)
  );

  @Effect()
    protected setSubscription = this.actions$.pipe(
      ofType<SendStripeTokenSuccessAction>(StudentsActionTypes.SEND_STRIPE_TOKEN_SUCCESS),
      exhaustMap(({ payload }) =>
        this.studentService.setSubscription(payload).pipe(
          map((response: any) => new SubscribeTeacherRequestAction(normalize(response, [cardsSchema]))),
          catchError((error: any) => of(new SubscribeTeacherFailureAction(error)))
        )
      )
    );
}