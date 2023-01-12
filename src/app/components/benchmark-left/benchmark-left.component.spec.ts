import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkLeftComponent } from './benchmark-left.component';

describe('BenchmarkLeftComponent', () => {
  let component: BenchmarkLeftComponent;
  let fixture: ComponentFixture<BenchmarkLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchmarkLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
