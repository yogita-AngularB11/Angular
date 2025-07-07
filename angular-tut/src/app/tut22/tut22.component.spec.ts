import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut22Component } from './tut22.component';

describe('Tut22Component', () => {
  let component: Tut22Component;
  let fixture: ComponentFixture<Tut22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tut22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
