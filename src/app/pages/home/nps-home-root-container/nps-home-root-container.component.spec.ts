import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsHomeRootContainerComponent } from './nps-home-root-container.component';

describe('NpsHomeRootContainerComponent', () => {
  let component: NpsHomeRootContainerComponent;
  let fixture: ComponentFixture<NpsHomeRootContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsHomeRootContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsHomeRootContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
