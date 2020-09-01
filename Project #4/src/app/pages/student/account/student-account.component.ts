import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { selectCards } from '@src/app/store/modules/cards/cards.selectors';
import { RemoveUserCardRequestAction } from '@src/app/store/modules/cards/cards.actions';
import {
  UpdateUserContactDetailsRequestAction,
  UpdateUserPasswordRequestAction,
} from "@src/app/store/modules/user/user.actions";
import { environment } from '@src/environments/environment';
declare const Stripe;
const { publishableApiKey } = environment;
import {
  UpdateUserContactDetailsRequestAction,
  UpdateUserPasswordRequestAction
} from '@src/app/store/modules/user/user.actions';
import {MatDialog} from '@angular/material';

import { filter } from 'rxjs/operators';
import { StudentInterface } from '@src/app/interfaces/students';
import { TeacherInterface } from '@src/app/interfaces/teachers';
import { CardDetailInterface } from '@src/app/interfaces/cards';
import { ConfirmationDialogComponent } from '@src/app/components/modals/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-student-account-component',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.scss']
})
export class StudentAccountComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    private store: Store<IAppState>,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ) {}
  // Forms
  public contactDetailsForm: FormGroup;
  public passwordForm: FormGroup;

  public showStripeForm: boolean = false;
  public paymentCardForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    toAccount: [false]
  });

  public user$: Observable<StudentInterface> = this.store.pipe(
    select(selectUserActive),
    filter(user => Boolean(user))
  );
  public cards$: Observable<CardDetailInterface[]> = this.store.pipe(
    select(selectCards),
    filter(cards => Boolean(cards))
  );

  public addPaymentMethod(){
    this.showStripeForm = true;
  }

  public removeCard(cardId): void {
    const dialogRef = this.dialog.open((ConfirmationDialogComponent), {
      width: '500px',
      data: {message: `Are you sure you want to delete this card?`},
    });
    dialogRef.afterClosed()
      .pipe(
        filter((result) => Boolean(result)),
      )
      .subscribe(() => {
        this.store.dispatch(new RemoveUserCardRequestAction(cardId));
      });
  }

  initStripe() {
    const stripe = Stripe(publishableApiKey);
    const elements = stripe.elements();

    const card = elements.create('card', {
      style: {
        base: {
          fontSize: '18px',
          color: '#2f2f2f',
          fontFamily: '"Futura Std Light", serif',
          fontWeight: '300'
        },
        invalid: {
          color: '#f44336'
        }
      },
      hideIcon: true,
      hidePostalCode: true
    });

    card.mount('#card-element');
    card.addEventListener('change', ({ error }) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        displayError.textContent = error.message;
      } else {
        displayError.textContent = '';
      }
    });

    // Create a token or display an error when the form is submitted.
    const form = document.getElementById('payment-form');

    form.addEventListener('submit', async event => {
      event.preventDefault();
      const { name, toAccount } = this.paymentCardForm.value;
      this.showStripeForm = false;

      const { token, error } = await stripe.createToken(card, { name });

      if (error) {
        // Inform the customer that there was an error.
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = error.message;
      } else {
        // Send the token to your server.
        stripeTokenHandler(token.id, toAccount);
        this.paymentCardForm.reset();
        card.clear();
      }
    });

    const stripeTokenHandler = (token, toAccount) => {
      const accountMark = Number(toAccount);
      this.store.dispatch(new SendStripeTokenRequestAction({ token, accountMark }));
    };
  }

  ngAfterViewInit() {
    this.initStripe();
  }

  saveContactDetails() {
    const formData = this.contactDetailsForm.value;
    const payload = {
      email: formData.email,
      telephone: formData.phone
    };
    console.log('saveContactDetails: ', payload);
    this.store.dispatch(new UpdateUserContactDetailsRequestAction(payload));
  }

  savePassword() {
    const formData = this.passwordForm.value;
    const payload = {
      password: formData.password,
    };
    console.log('savePassword: ', payload);
    this.store.dispatch(new UpdateUserPasswordRequestAction(payload));
  }  
}