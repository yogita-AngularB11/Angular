import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut16Component } from './tut16.component';

describe('Tut16Component', () => {
  let component: Tut16Component;
  let fixture: ComponentFixture<Tut16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
