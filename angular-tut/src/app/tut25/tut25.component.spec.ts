import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut25Component } from './tut25.component';

describe('Tut25Component', () => {
  let component: Tut25Component;
  let fixture: ComponentFixture<Tut25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
