import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropojeniComponent } from './propojeni.component';

describe('PropojeniComponent', () => {
  let component: PropojeniComponent;
  let fixture: ComponentFixture<PropojeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropojeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropojeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
