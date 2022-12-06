import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDashbaordComponent } from './employee-dashbaord.component';

describe('EmployeeDashbaordComponent', () => {
  let component: EmployeeDashbaordComponent;
  let fixture: ComponentFixture<EmployeeDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDashbaordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
