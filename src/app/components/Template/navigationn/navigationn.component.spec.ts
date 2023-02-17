import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationnComponent } from './navigationn.component';

describe('NavigationnComponent', () => {
  let component: NavigationnComponent;
  let fixture: ComponentFixture<NavigationnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
