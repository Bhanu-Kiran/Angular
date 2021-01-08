import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootspCardComponent } from './bootsp-card.component';

describe('BootspCardComponent', () => {
  let component: BootspCardComponent;
  let fixture: ComponentFixture<BootspCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootspCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootspCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
