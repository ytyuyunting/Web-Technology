import { Component, OnInit,Input, ViewChild} from '@angular/core';
import { CartService } from '../cart.service';
import { BaseChartDirective } from 'ng2-charts';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-hourly-chart',
  templateUrl: './hourly-chart.component.html',
  styleUrls: ['./hourly-chart.component.css']
})
export class HourlyChartComponent implements OnInit {

  @Input() weaObj: object;
  @ViewChild(BaseChartDirective, {static: true}) chart: BaseChartDirective;

  hourlyParam= "";
  hourlyObj={};
  string = "like";
  ylabel:string;

  constructor( private cartService: CartService) 
  {  }

  update(){
    this.barChartData[0].data=[];
    setTimeout(() => {
      this.process(this.weaObj);
      this.chart.chart.config.options.scales.yAxes[0].scaleLabel.labelString = this.barChartOptions.scales.yAxes[0].scaleLabel.labelString;
      this.chart.chart.update();
    }, 100);
  }

  process(obj) {
      //this.barChartLabels= ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12'];
      if(typeof obj.hourly != 'undefined'){
        if(typeof obj.hourly.data != 'undefined'){
          if(this.hourlyParam=="Temperature"){
            this.barChartData[0].label= this.hourlyParam;
            this.barChartOptions.scales.yAxes[0].scaleLabel.labelString= 'Fahrenheit';
            for (var value of obj.hourly.data) {
              this.barChartData[0].data.push(value.temperature);
            }
          }
          else if(this.hourlyParam=="Pressure"){
            this.barChartData[0].label= this.hourlyParam;
            this.ylabel= 'Millibars';
            this.barChartOptions.scales.yAxes[0].scaleLabel.labelString= this.ylabel;
            //this.barChartData[0].data= [65, 59, 80, 81, 56, 55, 51,84, 85, 88, 89, 86, 85, 84];
            for (var value of obj.hourly.data) {
              this.barChartData[0].data.push(value.pressure);
            }
          }
          else if(this.hourlyParam=="Humidity"){
            this.barChartData[0].label= this.hourlyParam;
            this.barChartOptions.scales.yAxes[0].scaleLabel.labelString= '%';
            for (var value of obj.hourly.data) {
              this.barChartData[0].data.push(value.humidity);
            } }
          else if(this.hourlyParam=="Ozone"){
            this.barChartData[0].label= this.hourlyParam;
            this.barChartOptions.scales.yAxes[0].scaleLabel.labelString= 'Dobson Units';
            for (var value of obj.hourly.data) {
              this.barChartData[0].data.push(value.ozone);

            }}
          else if(this.hourlyParam=="Visibility"){
            this.barChartData[0].label= this.hourlyParam;
            this.barChartOptions.scales.yAxes[0].scaleLabel.labelString= 'Miles';
            for (var value of obj.hourly.data) {
              this.barChartData[0].data.push(value.visibility);
            }}
          else if(this.hourlyParam=="Wind Speed"){
            this.barChartData[0].label= this.hourlyParam;
            this.barChartOptions.scales.yAxes[0].scaleLabel.labelString= "Miles per hour";
            for (var value of obj.hourly.data) {
              this.barChartData[0].data.push(value.windSpeed);
            }
          }     
        }
      }
    }
  


   public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
              scaleLabel: {
              display: true,
              labelString: this.ylabel,
            }
          }],
      xAxes: [{
              scaleLabel: {
              display: true,
              labelString: 'Time difference from current hour',
            }
          }],
    },
    animation: {
    animationEasing: 'easeInOutQuart',
    duration:1000
    }
  };
  
  public barChartLabels=[] //= ['0', '1', '2', '3', '4', '5', '6','7','8','9','10','11','12'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {
      data: [], 
      label: 'Temperature',
      backgroundColor: '#87CEEB',
    },
  ];
  public a;

  ngOnInit() {
    this.hourlyParam= "Temperature";
    for(let i = 0; i <= 23; i++){
       this.barChartLabels.push(i.toString());
    }
    this.process(this.weaObj);
  }


}
