import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCardComponent } from './current-card.component';

describe('CurrentCardComponent', () => {
  let component: CurrentCardComponent;
  let fixture: ComponentFixture<CurrentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
