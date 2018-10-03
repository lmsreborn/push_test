import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsHeaderComponent } from './nps-header.component';

describe('NpsHeaderComponent', () => {
  let component: NpsHeaderComponent;
  let fixture: ComponentFixture<NpsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
