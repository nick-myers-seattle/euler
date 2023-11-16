import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanesComponent } from './canes.component';

describe('CanesComponent', () => {
  let component: CanesComponent;
  let fixture: ComponentFixture<CanesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanesComponent]
    });
    fixture = TestBed.createComponent(CanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
