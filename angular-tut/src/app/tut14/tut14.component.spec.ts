import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut14Component } from './tut14.component';

describe('Tut14Component', () => {
  let component: Tut14Component;
  let fixture: ComponentFixture<Tut14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
