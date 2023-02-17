import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMeetingMemoComponent } from './site-meeting-memo.component';

describe('SiteMeetingMemoComponent', () => {
  let component: SiteMeetingMemoComponent;
  let fixture: ComponentFixture<SiteMeetingMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMeetingMemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMeetingMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
