import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut13Component } from './tut13.component';

describe('Tut13Component', () => {
  let component: Tut13Component;
  let fixture: ComponentFixture<Tut13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
