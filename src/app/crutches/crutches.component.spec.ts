import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrutchesComponent } from './crutches.component';

describe('CrutchesComponent', () => {
  let component: CrutchesComponent;
  let fixture: ComponentFixture<CrutchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrutchesComponent]
    });
    fixture = TestBed.createComponent(CrutchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
