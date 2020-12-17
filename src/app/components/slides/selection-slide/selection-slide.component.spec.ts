import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSlideComponent } from './selection-slide.component';

describe('SelectionSlideComponent', () => {
  let component: SelectionSlideComponent;
  let fixture: ComponentFixture<SelectionSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
