import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:angular-frontend/Student-Course/src/app/student-form/student-form.spec.ts
import { StudentForm } from './student-form';

describe('StudentForm', () => {
  let component: StudentForm;
  let fixture: ComponentFixture<StudentForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentForm);
========
import { Otp } from './otp';

describe('Otp', () => {
  let component: Otp;
  let fixture: ComponentFixture<Otp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Otp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Otp);
>>>>>>>> 79a271e99e42afbfa1781c193a2cc3408bd45fa2:angular-frontend/Student-Course/src/app/auth/otp/otp.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
