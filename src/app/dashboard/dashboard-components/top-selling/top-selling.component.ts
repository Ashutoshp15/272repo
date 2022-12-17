import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Feed, topcharity } from '../../../about.data';
@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})
export class TopSellingComponent implements OnInit {

  tmpa:Number=0;
  tmp1:string="";
  feeds:any[]=[];
  businessData:any[]=[];
  display:topcharity[]=[
    {
      image: 'assets/images/users/user1.jpg',
      uname: '',
      gmail: '+1-650-786-9132',
      productName: 'We embrace our responsibility to create a positive impact in the communities in which we work and live',
      status: 'success',
      weeks:0,
      budget:0,
  },
  {
    image: 'assets/images/users/user2.jpg',
    uname: '',
    gmail: ' (650) 316 3549',
    productName: ' it is our conviction that the engagement with social issues must be deep, meaningful and formed on the bedrock of long term commitment',
    status: 'success',
    weeks:0,
    budget:0,
},
{
  image: 'assets/images/users/user3.jpg',
  uname: 'Infosys',
  gmail: '+1-650-494-6262',
  productName: 'Commited to accelerating sustainable and inclusive growth, we have committed $2 billion to social responsibility efforts by 2030',
  status: 'success',
  weeks:5400,
  budget:54000,
},
{
  image: 'assets/images/users/user4.jpg',
  uname: 'Barclays',
  gmail: '+1-650-845-3600',
  productName: 'Our mission is to drive transformative social impact by applying  talent in partnership with the most innovative and effective organizations, addressing some of the worlds most pressing issues',
  status: 'info',
  weeks:3800,
  budget:38000,
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
        this.display[i].uname=this.tmp1;
        this.display[i].budget=this.tmpa;
       }
      });
      this.http
      .get<any>('/api/business/all', {
        headers: headers
      })
      .subscribe(data => {
        var tmp=JSON.stringify(data);
       this.businessData=JSON.parse(tmp);
       for(var i=0;i<this.businessData.length;i++){
         for(var j=0;j<this.feeds.length;j++)
         if(this.feeds[j].business==this.businessData[i].businessName)
        {
           this.feeds[j].weeks= (this.businessData[i].id)*15;
        }    
       }
      });

  }


}
