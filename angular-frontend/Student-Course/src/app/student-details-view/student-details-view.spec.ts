import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsView } from './student-details-view';

describe('StudentDetailsView', () => {
  let component: StudentDetailsView;
  let fixture: ComponentFixture<StudentDetailsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
