import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex02StudentTableComponent } from './student-table.component';

describe('StudentTableComponent', () => {
  let component: Ex02StudentTableComponent;
  let fixture: ComponentFixture<Ex02StudentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex02StudentTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex02StudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
