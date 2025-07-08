import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut26Component } from './tut26.component';

describe('Tut26Component', () => {
  let component: Tut26Component;
  let fixture: ComponentFixture<Tut26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
