import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtevreniPropojeniComponent } from './otevreni-propojeni.component';

describe('OtevreniPropojeniComponent', () => {
  let component: OtevreniPropojeniComponent;
  let fixture: ComponentFixture<OtevreniPropojeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtevreniPropojeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtevreniPropojeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
