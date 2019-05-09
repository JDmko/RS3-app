import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rs3Component } from './rs3.component';

describe('Rs3Component', () => {
  let component: Rs3Component;
  let fixture: ComponentFixture<Rs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
