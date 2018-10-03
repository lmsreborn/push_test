import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsHomeProfileTablesComponent } from './nps-home-profile-tables.component';

describe('NpsHomeProfileTablesComponent', () => {
  let component: NpsHomeProfileTablesComponent;
  let fixture: ComponentFixture<NpsHomeProfileTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsHomeProfileTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsHomeProfileTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
