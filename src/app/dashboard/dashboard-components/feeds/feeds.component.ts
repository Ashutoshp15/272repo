import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Feed } from '../../../about.data';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html'
})
export class FeedsComponent implements OnInit {
  tmpa:Number=0;
  tmp1:string="";
  feeds:any[]=[];
  display:Feed[]=[
    {
      class: 'bg-info',
      icon: 'bi bi-bell',
      business: '',
      amount:0,
  },
  {
      class: 'bg-success',
      icon: 'bi bi-hdd',
      business: '',
      amount: 0,
  },
  {
      class: 'bg-warning',
      icon: 'bi bi-bag-check',
      business: '',
      amount:0,
  },
  {
      class: 'bg-danger',
      icon: 'bi bi-person',
      business: '',
      amount: 0,
  },
  
  ]

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
      .get<any>('/api/charity/donationFromBusiness/'+username+'/top', {
        headers: headers
      })
      .subscribe(data => {
        var tmp=JSON.stringify(data);
       this.feeds=JSON.parse(tmp);
       for(var i=0;i<this.feeds.length;i++){
        this.tmpa=this.feeds[i].amount;
        this.tmp1=this.feeds[i].business;
        this.display[i].business=this.tmp1;
        this.display[i].amount=this.tmpa;
       }
      });

  }

}
