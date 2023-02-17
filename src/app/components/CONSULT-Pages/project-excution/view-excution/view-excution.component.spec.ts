import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExcutionComponent } from './view-excution.component';

describe('ViewExcutionComponent', () => {
  let component: ViewExcutionComponent;
  let fixture: ComponentFixture<ViewExcutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExcutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExcutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
