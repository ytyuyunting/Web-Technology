import { Component, ViewChild, TemplateRef , OnInit, Input} from '@angular/core';
import { CartService } from '../cart.service';
import * as CanvasJS from './canvasjs.min';
//import { DatePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpHeaders}    from '@angular/common/http'

@Component({
  selector: 'app-weekly-chart',
  templateUrl: './weekly-chart.component.html',
  styleUrls: ['./weekly-chart.component.css']
})
export class WeeklyChartComponent implements OnInit {
  @Input() weaObj: object;
  @Input() city: string;
  
  dataPoints=[];
  //datePipe = new DatePipe('en-US');
  closeResult: string;
  contentstr:string;
  time: number;
  lat: number;
  lon: number;
  detailObj={};
  bigIconSrc:string;
  date: Date;

  @ViewChild("content",{static: true}) modalContent: TemplateRef<any>;

  constructor( 
    private http:HttpClient, 
    private cartService: CartService, 
    private modalService: NgbModal
    ) 
  {  }


  getIcon(obj){
    if(typeof obj.currently != 'undefined'){
      if(obj.currently.icon=="clear-day"||obj.currently.icon=="clear-night"){
        this.bigIconSrc="https://cdn3.iconfinder.com/data/icons/weather-344/142/sun-512.png";
      }
      else if(obj.currently.icon=="rain"){
        this.bigIconSrc="https://cdn3.iconfinder.com/data/icons/weather-344/142/rain-512.png";
      }
      else if(obj.currently.icon=="snow"){
        this.bigIconSrc="https://cdn3.iconfinder.com/data/icons/weather-344/142/snow-512.png";
      }
      else if(obj.currently.icon=="sleet"){
        this.bigIconSrc="https://cdn3.iconfinder.com/data/icons/weather-344/142/lightning-512.png";
      }
      else if(obj.currently.icon=="wind"){
        this.bigIconSrc="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_10-512.png";
      }
      else if(obj.currently.icon=="fog"){
        this.bigIconSrc="https://cdn3.iconfinder.com/data/icons/weather-344/142/cloudy-512.png";
      }
      else if(obj.currently.icon=="cloudy"){
        this.bigIconSrc="https://cdn3.iconfinder.com/data/icons/weather-344/142/cloud-512.png";
      }
      else if(obj.currently.icon=="partly-cloudy-day" || obj.currently.icon=="partly-cloudy-night"){
        this.bigIconSrc="https://cdn3.iconfinder.com/data/icons/weather-344/142/sunny-512.png";
      }

    }
  }

  process(obj) {
    this.lat= obj.latitude;
    this.lon =obj.longitude;
/*    console.log(this.lon);
    console.log("this.time");
    console.log(this.time);*/
    if(typeof obj.daily != 'undefined'){
        if(typeof obj.daily.data != 'undefined'){
          for (var value of obj.daily.data) {
            var newobj={x: new Date(value.time*1000), y:[value.temperatureLow,value.temperatureHigh]};
            this.dataPoints.push(newobj);
            }
        }
      }
  }



    
  ngOnInit(){
    this.process(this.weaObj);
    let chart = new CanvasJS.Chart("chartContainer",{
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Weekly Weather",
      fontSize:25,
      fontWeight:"bold",
      fontColor: "black"
    },
    axisX: {
      title: "Days",
      fontSize:15,
      labelFormatter: function (e) {
        return CanvasJS.formatDate( e.value, "DD/MM/YYYY");
      }
    },
    axisY: {
      includeZero: false,
      title: "Temperature in Fahrenheit",
      fontSize:13,
      interval: 10,
      suffix: "",
      prefix: "",
    }, 

    legend: {
     horizontalAlign: "center", // left, center ,right 
     verticalAlign: "top",  // top, center, bottom
   },

    data: [{
      click: function(e) {
        this.time = new Date(e.dataPoint.x).getTime()/1000;
        document.getElementById('hiddenButton').click();
        this.date= e.dataPoint.x;

      }.bind(this),
      color: "#87CEEB",
      thickness: 3,
      type: "rangeBar",
      showInLegend: true,
      legendText:"Day wise temperature range",
      yValueFormatString: "#0",
      xValueFormatString: "DD/MM/YYYY",
      toolTipContent: "<b>{x}</b>: {y[0]} to {y[1]}",
      dataPoints : this.dataPoints,
      }],

    });
    chart.render();
  }



  openModel(content) {
      this.getDetailData();
      this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop:false, 
      centered:true,
      size: "lg",
    });
    console.log("openmodel");
  }

  getDetailData(){
    let api ="localhost:3000/detail";
    api += '?inputLat=' + this.lat;
    api += '&inputLon=' + this.lon;
    //api += '&inputTime=' + this.time;
    api += '&inputTime=' + this.time;
    this.http.get(api).subscribe((response:any)=>{
      this.detailObj=response;
      this.getIcon(this.detailObj);
    });
  }


  /*clickfunc(e){
        this.time= e.dataPoint.x;
        console.log(this.time.getTime()/1000);
        alert("dataSeries Event => Type: "+ e.dataSeries.type+ ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );
  }
*/



}
