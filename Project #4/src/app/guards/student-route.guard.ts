import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/app.reducers';
import { selectUserActive } from '../store/modules/user/user.selectors';
import { Observable } from 'rxjs';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';

@Injectable()
export class StudentRouteGuard implements CanActivate {
  public user: any;
  public user$: Observable<any> = this.store.pipe(select(selectUserActive));

  constructor(
    protected router: Router,
    protected store: Store<IAppState>,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.user$.subscribe(user => {
      if (user && user.view_status === ViewStatuses.TEACHER) {
        this.router.navigateByUrl(`/teacher`);
        return false;
      }
    });
    return true;
  }
}
