import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '@src/app/pages/about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
        data: {
          title: 'About'
        }
      },
    ])
  ]
})
export class AboutModule { }
