import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectLeftComponent } from './aspect-left.component';

describe('AspectLeftComponent', () => {
  let component: AspectLeftComponent;
  let fixture: ComponentFixture<AspectLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
