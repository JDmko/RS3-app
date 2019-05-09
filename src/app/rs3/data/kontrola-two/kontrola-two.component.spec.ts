import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrolaTwoComponent } from './kontrola-two.component';

describe('KontrolaTwoComponent', () => {
  let component: KontrolaTwoComponent;
  let fixture: ComponentFixture<KontrolaTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontrolaTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontrolaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
