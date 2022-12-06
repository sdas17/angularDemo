import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textsection2Component } from './textsection2.component';

describe('Textsection2Component', () => {
  let component: Textsection2Component;
  let fixture: ComponentFixture<Textsection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textsection2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textsection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
