import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNevComponent } from './app-nev.component';

describe('AppNevComponent', () => {
  let component: AppNevComponent;
  let fixture: ComponentFixture<AppNevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppNevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
