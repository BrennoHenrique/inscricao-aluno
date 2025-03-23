import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ex02StudentListComponent } from './components/student-list.component';
import { AgePipe } from '../../shared/pipes/age.pipe';
import { RouterModule } from '@angular/router';
import { Ex02StudentTableComponent } from './components/student-table/student-table.component';



@NgModule({
  declarations: [Ex02StudentListComponent, Ex02StudentTableComponent],
  imports: [
    CommonModule,
    AgePipe,
    RouterModule.forChild([
      {
        path: "",
        component: Ex02StudentListComponent
      }
    ])
  ]
})
export class Ex02StudentListModule { }
