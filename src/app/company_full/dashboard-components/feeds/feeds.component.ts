import { Component, OnInit } from '@angular/core';
import { Feed } from './feeds-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {

  feeds:any[]=[];
  charitycatg:string[]=[];
  constructor(public http:HttpClient) {

 
  }

  ngOnInit(): void {
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
       this.feeds=JSON.parse(tmp);
   
      });

    }
}
