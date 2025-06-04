import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualStatsComponent } from './visual-stats.component';

describe('VisualStatsComponent', () => {
  let component: VisualStatsComponent;
  let fixture: ComponentFixture<VisualStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
