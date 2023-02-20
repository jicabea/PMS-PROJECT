import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalProjectsComponent } from './external-projects.component';

describe('ExternalProjectsComponent', () => {
  let component: ExternalProjectsComponent;
  let fixture: ComponentFixture<ExternalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
