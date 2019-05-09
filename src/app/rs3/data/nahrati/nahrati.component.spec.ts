import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NahratiComponent } from './nahrati.component';

describe('NahratiComponent', () => {
  let component: NahratiComponent;
  let fixture: ComponentFixture<NahratiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NahratiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NahratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
