import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdvodneniComponent } from './odvodneni.component';

describe('OdvodneniComponent', () => {
  let component: OdvodneniComponent;
  let fixture: ComponentFixture<OdvodneniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdvodneniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdvodneniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
