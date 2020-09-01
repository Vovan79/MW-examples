import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeachersComponent } from '@src/app/pages/teachers/teachers.component';
import { TeachersListComponent } from './list/teachers-list.component';
import { TeachersItemComponent } from './item/teachers-item.component';

@NgModule({
  declarations: [TeachersComponent, TeachersListComponent, TeachersItemComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeachersListComponent,
        data: {
          title: 'Teachers'
        }
      },
      {
        path: '/',
        component: TeachersItemComponent,
        data: {
          title: 'Teacher details'
        }
      }
    ])
  ]
})
export class TeachersModule { }
