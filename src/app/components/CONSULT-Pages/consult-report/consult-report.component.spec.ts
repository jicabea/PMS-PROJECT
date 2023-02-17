import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultReportComponent } from './consult-report.component';

describe('ConsultReportComponent', () => {
  let component: ConsultReportComponent;
  let fixture: ComponentFixture<ConsultReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
