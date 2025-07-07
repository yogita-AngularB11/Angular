import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut19Component } from './tut19.component';

describe('Tut19Component', () => {
  let component: Tut19Component;
  let fixture: ComponentFixture<Tut19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
