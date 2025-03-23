import { Component, Input } from '@angular/core';
import { Student } from '../../../../shared/models/student.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class Ex02StudentTableComponent {
  @Input() theme: "gray" | "red" = "gray";
  @Input() studentList: Student[] = [];

  trackByStudent(index: number, student: any): string {
    return student.id;
  }
}
