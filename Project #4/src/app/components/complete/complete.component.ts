import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs/index';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { IAppState } from '@src/app/store/app.reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;

  public subscriptions: Subscription[] = [];
  public user$: Observable<any> = this.store.pipe(select(selectUserActive));
  public user: any = null;

  constructor(private store: Store<IAppState>, private router: Router) {}
  ngOnInit() {
    this.subscriptions.push(
      this.user$.subscribe(user => {
        this.user = user;
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  goToDashboard() {
    if (this.user) {
      const navigateData = { state: { openTakethetourModal: true } };
      this.user.view_status === ViewStatuses.STUDENT
        ? this.router.navigate(['/student'], navigateData)
        : this.router.navigate(['/teacher'], navigateData);
    }
  }
}
