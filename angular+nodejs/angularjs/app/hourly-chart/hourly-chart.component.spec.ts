import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyChartComponent } from './hourly-chart.component';

describe('HourlyChartComponent', () => {
  let component: HourlyChartComponent;
  let fixture: ComponentFixture<HourlyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
