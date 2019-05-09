import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaKotelnyComponent } from './schema-kotelny.component';

describe('SchemaKotelnyComponent', () => {
  let component: SchemaKotelnyComponent;
  let fixture: ComponentFixture<SchemaKotelnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaKotelnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaKotelnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
