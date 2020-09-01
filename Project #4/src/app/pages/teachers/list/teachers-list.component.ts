import { Component, OnDestroy, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { Subscription } from 'rxjs/internal/Subscription';
import { selectTeachers } from "@src/app/store/modules/teachers/teachers.selectors";
import { GetTeachersListRequestAction } from "@src/app/store/modules/teachers/teachers.actions";

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit, OnDestroy {
  public teachers$ = this.store.pipe(select(selectTeachers));
  public teachers: any = [];
  public subscriptions: Subscription[] = [];

  constructor(private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.loadTeachersList();

    this.subscriptions.push(
      this.teachers$.subscribe(teachers => {
        this.teachers = teachers;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  loadTeachersList() {
    this.store.dispatch(new GetTeachersListRequestAction());
  }
}
