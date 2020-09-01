import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from "@angular/router";
import { select, Store } from '@ngrx/store';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { IAppState } from '@src/app/store/app.reducers';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  public user$: Observable<any> = this.store.pipe(select(selectUserActive));
  public subscriptions: Subscription[] = [];
  public user: any = null;

  constructor(private store: Store<IAppState>, protected router: Router) { }

  ngOnInit() {
    this.subscriptions.push(
      this.user$.subscribe(user => {
        if (user) {
          if (user.view_status === 'student') {
            this.router.navigate(['/student/account']);
          }
          if (user.view_status === 'creator') {
            this.router.navigate(['/teacher/account']);
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
