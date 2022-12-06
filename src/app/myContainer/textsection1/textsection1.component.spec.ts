import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textsection1Component } from './textsection1.component';

describe('Textsection1Component', () => {
  let component: Textsection1Component;
  let fixture: ComponentFixture<Textsection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Textsection1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textsection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
