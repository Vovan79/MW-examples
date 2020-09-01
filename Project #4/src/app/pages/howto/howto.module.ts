import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HowtoComponent } from '@src/app/pages/howto/howto.component';

@NgModule({
  declarations: [HowtoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HowtoComponent,
        data: {
          title: 'Contact us'
        }
      },
    ])
  ]
})
export class HowtoModule { }
