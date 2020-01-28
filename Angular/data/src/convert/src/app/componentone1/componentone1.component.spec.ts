import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentone1Component } from './componentone1.component';

describe('Componentone1Component', () => {
  let component: Componentone1Component;
  let fixture: ComponentFixture<Componentone1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componentone1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componentone1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
