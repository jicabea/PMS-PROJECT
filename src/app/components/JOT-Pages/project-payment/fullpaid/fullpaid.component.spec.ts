import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpaidComponent } from './fullpaid.component';

describe('FullpaidComponent', () => {
  let component: FullpaidComponent;
  let fixture: ComponentFixture<FullpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullpaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
