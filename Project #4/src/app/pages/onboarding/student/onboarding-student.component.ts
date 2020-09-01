import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { GetTeachersListRequestAction } from '../../../store/modules/teachers/teachers.actions';
import { selectTeachers } from '../../../store/modules/teachers/teachers.selectors';
import { OnboardingStudentStepOneRequestAction } from '@src/app/store/modules/onboarding/onboarding.actions';
import {
  selectOnboardingErrors,
  selectOnboardingIscompleted,
  selectOnboardingStatus
} from '@src/app/store/modules/onboarding/onboarding.selectors';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { SpinnerOverlayService } from '@src/app/services/spinner-overlay/spinner-overlay.service';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { Router } from '@angular/router';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { filter, map, startWith } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-onboarding-student',
  templateUrl: './onboarding-student.component.html',
  styleUrls: ['./onboarding-student.component.scss']
})
export class OnBoardingStudentComponent implements OnInit, OnDestroy {
  public teachersFormControl = new FormControl('', Validators.required);
  public filteredOptions: Observable<any[]>;

  // Store
  public subscriptions: Subscription[] = [];
  public teachersList$: Observable<any[]> = this.store.pipe(
    select(selectTeachers),
    filter(teachers => Boolean(teachers))
  );

  public status$: Observable<string> = this.store.pipe(
    select(selectOnboardingStatus),
    filter(status => Boolean(status))
  );

  public errors$: Observable<any> = this.store.pipe(
    select(selectOnboardingErrors),
    filter(errors => Boolean(errors))
  );
  public isCompleted$: Observable<any> = this.store.pipe(
    select(selectOnboardingIscompleted),
    filter(isCompleted => Boolean(isCompleted))
  );
  public user$: Observable<any> = this.store.pipe(
    select(selectUserActive),
    filter(user => Boolean(user))
  );
  public status: null | string = null;
  public errors: null | string = null;
  public user = null;
  public viewStatuses = ViewStatuses;
  public slug: string = '';

  public stepOneForm: FormGroup = this.fb.group({
    teacher: this.teachersFormControl
  });
  // Request statuses
  public requestStatus = RequestStatus;

  // Teacher list for dropdown
  public teachersList: any[] = [];

  // Is onboarding completed?
  public isCompleted = false;

  constructor(
    private store: Store<IAppState>,
    private fb: FormBuilder,
    private spinnerOverlayService: SpinnerOverlayService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showDataOptions();
    this.load();

    this.subscriptions.push(
      this.user$.subscribe(user => {
        this.user = user;
        if (user.creators && user.creators.length) {
          this.router.navigateByUrl('/student');
        }
      }),
      this.teachersList$.subscribe(teachers => {
        this.teachersList = teachers
          .filter(teacher => teacher.first_name || teacher.last_name)
          .map(teacher => ({
            name: `${teacher.first_name} ${teacher.last_name}`,
            slug: teacher.slug
          }));
      }),
      this.status$.subscribe(status => {
        this.status = status;
      }),
      this.errors$.subscribe(errors => {
        this.errors = errors;
      }),
      this.isCompleted$.subscribe(isCompleted => {
        this.isCompleted = isCompleted;
      })
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.teachersList.filter(({ name }) => name.toLowerCase().includes(filterValue));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  load() {
    this.store.dispatch(new GetTeachersListRequestAction());
  }

  /**
   * Handle click submit button
   */
  handleSubmitClick(): void {
    this.stepOneForm.markAllAsTouched();

    if (this.stepOneForm.invalid) {
      return;
    }

    if (this.slug) {
      // Store first step
      this.store.dispatch(
        new OnboardingStudentStepOneRequestAction({
          teacherSlug: this.slug
        })
      );
    }
  }
  public selected(event: MatAutocompleteSelectedEvent) {
    const { value } = event.option;
    const [teacher] = this.teachersList.filter(teacher => teacher.name === value);

    if (teacher) {
      this.slug = teacher.slug;
    }
  }

  showDataOptions() {
    this.filteredOptions = this.teachersFormControl.valueChanges.pipe(
      startWith(''),
      map((label: string) => this._filter(label))
    );
  }
}
