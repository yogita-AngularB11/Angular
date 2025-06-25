import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut17Component } from './tut17.component';

describe('Tut17Component', () => {
  let component: Tut17Component;
  let fixture: ComponentFixture<Tut17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
