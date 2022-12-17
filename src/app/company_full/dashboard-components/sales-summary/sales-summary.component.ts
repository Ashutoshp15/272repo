import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexYAxis,
    ApexLegend,
    ApexXAxis,
    ApexTooltip,
    ApexTheme,
    ApexGrid
  } from 'ng-apexcharts';
//import {salesChartOptions} from "../../company-data"
export type ChartOptions ={
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
};
@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html'
})

export class SalesSummaryComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent=Object.create(null);
  public chartOptions: Partial<ChartOptions>
  data:any[]=[];
  charityName:string[]=[];
  amtDonated:number[]=[];
  // @ViewChild("chart") chart: ChartComponent = ChartComponent;
  // public salesChartOptions: Partial<salesChartOptions>;
  constructor(public http:HttpClient) {
  
    this.chartOptions = {
      series: [
        {
          name: "Amount Donated",
          data: this.amtDonated,
        }
      ],
       
      xaxis: {
        categories:[this.charityName[0],
        this.charityName[1],
        this.charityName[2],
        this.charityName[3],
        this.charityName[4],
        this.charityName[5],
        this.charityName[6]
  
      ]
      },
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        height: 250,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: '1',
      },
      grid: {
        strokeDashArray: 3,
      },
      tooltip: {
        theme: 'dark'
      }
    };
   }
   ngOnInit() :void{
    var temp = JSON.parse(localStorage.getItem('usersession') || '{}');
		var username = temp.name;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "*" ,
       "Access-Control-Allow-Headers":"Content-Type, Accept,Origin, X-Requested-With",
       "access-control-allow-credentials":" true" 
    });
    this.http
      .get<any>('/api/business/donatedCharities/'+username+'/top', {
        headers: headers
      })
      .subscribe(data => {
        var tmp=JSON.stringify(data);
       this.data=JSON.parse(tmp);
       this.charityName=[];
       for (var i=0;i<this.data.length;i++)
       {  console.log("in chart data");
            this.amtDonated.push(this.data[i].amount);
            this.charityName.push(this.data[i].charity);

       }
       console.log(this.charityName);
       this.chartOptions.xaxis={categories:[this.charityName[0],
       this.charityName[1],
       this.charityName[2],
       this.charityName[3],
       this.charityName[4],
       this.charityName[5],
       this.charityName[6]
 
     ]
    };
      });
   }
 
}
