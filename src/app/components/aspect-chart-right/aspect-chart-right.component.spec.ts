import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectChartRightComponent } from './aspect-chart-right.component';

describe('AspectChartRightComponent', () => {
  let component: AspectChartRightComponent;
  let fixture: ComponentFixture<AspectChartRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectChartRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectChartRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
