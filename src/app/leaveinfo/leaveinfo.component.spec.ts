import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveinfoComponent } from './leaveinfo.component';

describe('LeaveinfoComponent', () => {
  let component: LeaveinfoComponent;
  let fixture: ComponentFixture<LeaveinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
