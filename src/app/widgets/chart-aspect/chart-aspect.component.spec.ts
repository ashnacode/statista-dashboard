import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartAspectComponent } from './chart-aspect.component';

describe('ChartAspectComponent', () => {
  let component: ChartAspectComponent;
  let fixture: ComponentFixture<ChartAspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartAspectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartAspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
