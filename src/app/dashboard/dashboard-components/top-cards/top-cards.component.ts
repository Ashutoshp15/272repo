import { Component, OnInit } from '@angular/core';
import {topcard} from '../../../company_full/company-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  data:topcard[]=[{
    bgcolor: 'success',
    icon: 'bi bi-wallet',
    title: 0,
    subtitle: 'Total Donations Recieved'
  },
  {
    bgcolor: 'danger',
    icon: 'bi bi-coin',
    title: 5,
    subtitle: 'Total Projects Supported'
  }];
  totalDonation:number=0;

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
      .get<any>('/api/charity/totalDonation/'+username, {
        headers: headers
      })
      .subscribe(data => {
        var tmp=JSON.stringify(data);
       this.totalDonation=JSON.parse(tmp);
      //this.searchforDetails(this.detailVar);
      this.data[0].title=this.totalDonation;
      });

  }

}