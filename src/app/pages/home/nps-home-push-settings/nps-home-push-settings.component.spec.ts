import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsHomePushSettingsComponent } from './nps-home-push-settings.component';

describe('NpsHomePushSettingsComponent', () => {
  let component: NpsHomePushSettingsComponent;
  let fixture: ComponentFixture<NpsHomePushSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsHomePushSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsHomePushSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
