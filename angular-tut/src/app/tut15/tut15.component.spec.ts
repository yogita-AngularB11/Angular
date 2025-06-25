import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut15Component } from './tut15.component';

describe('Tut15Component', () => {
  let component: Tut15Component;
  let fixture: ComponentFixture<Tut15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
