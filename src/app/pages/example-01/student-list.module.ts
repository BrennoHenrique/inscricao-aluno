import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ex01StudentListComponent } from './components/student-list.component';
import { AgePipe } from '../../shared/pipes/age.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [Ex01StudentListComponent],
  imports: [
    CommonModule,
    AgePipe,
    RouterModule.forChild([
      {
        path: "",
        component: Ex01StudentListComponent
      }
    ])
  ]
})
export class Ex01StudentListModule { }
