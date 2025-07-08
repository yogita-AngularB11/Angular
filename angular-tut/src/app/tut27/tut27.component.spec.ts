import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut27Component } from './tut27.component';

describe('Tut27Component', () => {
  let component: Tut27Component;
  let fixture: ComponentFixture<Tut27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
