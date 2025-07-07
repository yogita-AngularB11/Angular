import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut18Component } from './tut18.component';

describe('Tut18Component', () => {
  let component: Tut18Component;
  let fixture: ComponentFixture<Tut18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
