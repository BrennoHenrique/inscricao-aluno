import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../../shared/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class Ex02StudentListService {

  getStudents(): Observable<{ data: Student[] }> {
    const response: { data: Student[] } = {
      data: [
        {
          id: '1',
          name: 'Guilherme',
          birth: '2008-07-17',
          teacher_name: 'Rebeca',
          school_subject: 'Flauta Transversal'
        },
        {
          id: '2',
          name: 'Beatriz',
          birth: '2007-09-15',
          teacher_name: 'Rebeca',
          school_subject: 'Flauta Transversal'
        },
        {
          id: '3',
          name: 'Rebeca',
          birth: '2005-03-10',
          teacher_name: 'Fulana',
          school_subject: 'Baixo'
        },
        {
          id: '4',
          name: 'Brenno',
          birth: '2001-06-15',
          teacher_name: 'Rebeca',
          school_subject: 'Partitura'
        }
      ]
    };
    
    return of(response);
  }
}
