import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { WeatherFormComponent } from './weather-form/weather-form.component';
import { DetailsComponent } from './details/details.component';
import { CurrentCardComponent } from './current-card/current-card.component';
import { HourlyChartComponent } from './hourly-chart/hourly-chart.component';
import { WeeklyChartComponent } from './weekly-chart/weekly-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaverateComponent } from './faverate/faverate.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherFormComponent,
    DetailsComponent,
    CurrentCardComponent,
    HourlyChartComponent,
    WeeklyChartComponent,
    FaverateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ChartsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
