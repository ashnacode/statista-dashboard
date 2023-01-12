import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectChartLeftComponent } from './aspect-chart-left.component';

describe('AspectChartLeftComponent', () => {
  let component: AspectChartLeftComponent;
  let fixture: ComponentFixture<AspectChartLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectChartLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectChartLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
