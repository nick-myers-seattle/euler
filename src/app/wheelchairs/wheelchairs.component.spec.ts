import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelchairsComponent } from './wheelchairs.component';

describe('WheelchairsComponent', () => {
  let component: WheelchairsComponent;
  let fixture: ComponentFixture<WheelchairsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WheelchairsComponent]
    });
    fixture = TestBed.createComponent(WheelchairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
