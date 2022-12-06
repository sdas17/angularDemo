import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInputPsKwComponent } from './app-input-ps-kw.component';

describe('AppInputPsKwComponent', () => {
  let component: AppInputPsKwComponent;
  let fixture: ComponentFixture<AppInputPsKwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInputPsKwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppInputPsKwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
