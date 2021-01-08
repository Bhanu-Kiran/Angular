import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StortsmanComponent } from './stortsman.component';

describe('StortsmanComponent', () => {
  let component: StortsmanComponent;
  let fixture: ComponentFixture<StortsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StortsmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StortsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
