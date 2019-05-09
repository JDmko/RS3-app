import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtevreniRsComponent } from './otevreni-rs.component';

describe('OtevreniRsComponent', () => {
  let component: OtevreniRsComponent;
  let fixture: ComponentFixture<OtevreniRsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtevreniRsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtevreniRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
