import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex01StudentListComponent } from './student-list.component';

describe('StudentListComponent', () => {
  let component: Ex01StudentListComponent;
  let fixture: ComponentFixture<Ex01StudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex01StudentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex01StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
