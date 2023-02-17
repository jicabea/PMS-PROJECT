import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsUpdatesComponent } from './task-details-updates.component';

describe('TaskDetailsUpdatesComponent', () => {
  let component: TaskDetailsUpdatesComponent;
  let fixture: ComponentFixture<TaskDetailsUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDetailsUpdatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDetailsUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
