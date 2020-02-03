import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaverateComponent } from './faverate.component';

describe('FaverateComponent', () => {
  let component: FaverateComponent;
  let fixture: ComponentFixture<FaverateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaverateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaverateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
