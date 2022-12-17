import { Component, AfterViewInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { about } from '../about.data';
//import {getRecommendations} from '../../charityreccomendation';
declare var getRecommendations: any;

@Component({
  selector: "app-full-layout",
  templateUrl: "./company_full.component.html",
  styleUrls: ["./company_full.component.scss"],
})
export class CompanyFullComponent implements AfterViewInit {
    constructor(public http:HttpClient) {
  }
  detailVar: about[] = [];
  totalcharity:any[]=[];
  topcharity:any[]=[];
  output:any[]=[];
  ngOnInit(){
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
    .get<any>('/api/business/totalDonation/'+{username}, {
      headers: headers
    })
    .subscribe(data => {
      var tmp=JSON.stringify(data);
     this.detailVar=JSON.parse(tmp);
    //this.searchforDetails(this.detailVar);
    });
    this.http
    .get<any>('/api/business/donatedCharities/'+{username}+'/all', {
      headers: headers
    })
    .subscribe(data => {
      var tmp=JSON.stringify(data);
     this.totalcharity=JSON.parse(tmp);
    //this.searchforDetails(this.detailVar);
    });
    this.http
    .get<any>('/api/business/donatedCharities/'+{username}+'/top', {
      headers: headers
    })
    .subscribe(data => {
      var tmp=JSON.stringify(data);
     this.topcharity=JSON.parse(tmp);
    //this.searchforDetails(this.detailVar);
    });
    console.log(this.topcharity,"top");
    console.log(this.totalcharity,"total");

    // this.output=getRecommendations(this.topcharity,this.totalcharity)
    //    console.log(this.output,"recommend");
}
  ngAfterViewInit() { }
}