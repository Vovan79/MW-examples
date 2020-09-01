import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/index';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public user$: Observable<any> = this.store.pipe(select(selectUserActive));
  public subscriptions: Subscription[] = [];
  public viewStatus: string = '';

  public user: any = null;
  constructor(private store: Store<IAppState>, protected router: Router) {}
  ngOnInit() {
    this.subscriptions.push(
      this.user$.subscribe(user => {
        if (user) {
          if (user.view_status === 'student') {
            this.viewStatus = 'student';
            this.router.navigate(['/student']);
          }
          if (user.view_status === 'creator') {
            this.viewStatus = 'creator';
            this.router.navigate(['/teacher']);
          }
        }
      })
    );
  }
  ngOnDestroy() {}
}