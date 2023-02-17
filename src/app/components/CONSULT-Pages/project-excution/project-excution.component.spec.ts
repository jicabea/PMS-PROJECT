import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExcutionComponent } from './project-excution.component';

describe('ProjectExcutionComponent', () => {
  let component: ProjectExcutionComponent;
  let fixture: ComponentFixture<ProjectExcutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectExcutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExcutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
