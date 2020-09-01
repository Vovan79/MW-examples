import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from '@src/app/pages/contactus/contactus.component';

@NgModule({
  declarations: [ContactusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactusComponent,
        data: {
          title: 'Contact us'
        }
      },
    ])
  ]
})
export class ContactusModule { }
