import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkRightComponent } from './benchmark-right.component';

describe('BenchmarkRightComponent', () => {
  let component: BenchmarkRightComponent;
  let fixture: ComponentFixture<BenchmarkRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchmarkRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
