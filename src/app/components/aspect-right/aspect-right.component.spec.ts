import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectRightComponent } from './aspect-right.component';

describe('AspectRightComponent', () => {
  let component: AspectRightComponent;
  let fixture: ComponentFixture<AspectRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
