import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvedeniDoProvozuComponent } from './uvedeni-do-provozu.component';

describe('UvedeniDoProvozuComponent', () => {
  let component: UvedeniDoProvozuComponent;
  let fixture: ComponentFixture<UvedeniDoProvozuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvedeniDoProvozuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvedeniDoProvozuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
