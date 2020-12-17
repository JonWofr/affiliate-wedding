import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionBannerComponent } from './selection-banner.component';

describe('SelectionBannerComponent', () => {
  let component: SelectionBannerComponent;
  let fixture: ComponentFixture<SelectionBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
