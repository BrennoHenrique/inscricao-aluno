import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Student } from '../../../shared/models/student.model';
import { StudentListService } from '../../../shared/services/student-list.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class Ex01StudentListComponent implements OnInit, OnDestroy {
  students: Student[] = [];

  private onDestroy$ = new Subject<void>();

  constructor(private studentListService: StudentListService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  private loadStudents(): void {
    this.studentListService.getStudents()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(response => {
        this.students = response.data;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  trackByStudent(index: number, student: any): string {
    return student.id;
  }
}
