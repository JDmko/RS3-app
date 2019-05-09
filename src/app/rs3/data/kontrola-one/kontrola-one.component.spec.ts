import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrolaOneComponent } from './kontrola-one.component';

describe('KontrolaOneComponent', () => {
  let component: KontrolaOneComponent;
  let fixture: ComponentFixture<KontrolaOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontrolaOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontrolaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
