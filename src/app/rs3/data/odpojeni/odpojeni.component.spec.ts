import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdpojeniComponent } from './odpojeni.component';

describe('OdpojeniComponent', () => {
  let component: OdpojeniComponent;
  let fixture: ComponentFixture<OdpojeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdpojeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdpojeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
