import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UzavrenipropojeniComponent } from './uzavrenipropojeni.component';

describe('UzavrenipropojeniComponent', () => {
  let component: UzavrenipropojeniComponent;
  let fixture: ComponentFixture<UzavrenipropojeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UzavrenipropojeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzavrenipropojeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
