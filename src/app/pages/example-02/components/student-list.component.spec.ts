import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex02StudentListComponent } from './student-list.component';

describe('StudentListComponent', () => {
  let component: Ex02StudentListComponent;
  let fixture: ComponentFixture<Ex02StudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex02StudentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex02StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
