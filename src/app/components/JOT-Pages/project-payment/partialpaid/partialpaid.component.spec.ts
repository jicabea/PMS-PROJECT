import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialpaidComponent } from './partialpaid.component';

describe('PartialpaidComponent', () => {
  let component: PartialpaidComponent;
  let fixture: ComponentFixture<PartialpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialpaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
