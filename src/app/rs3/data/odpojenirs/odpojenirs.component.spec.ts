import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdpojenirsComponent } from './odpojenirs.component';

describe('OdpojenirsComponent', () => {
  let component: OdpojenirsComponent;
  let fixture: ComponentFixture<OdpojenirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdpojenirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdpojenirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
