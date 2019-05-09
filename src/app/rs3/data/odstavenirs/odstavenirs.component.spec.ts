import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdstavenirsComponent } from './odstavenirs.component';

describe('OdstavenirsComponent', () => {
  let component: OdstavenirsComponent;
  let fixture: ComponentFixture<OdstavenirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdstavenirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdstavenirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
