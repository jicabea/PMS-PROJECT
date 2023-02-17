import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultComponent } from './dashboard-consult.component';

describe('DashboardConsultComponent', () => {
  let component: DashboardConsultComponent;
  let fixture: ComponentFixture<DashboardConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardConsultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
