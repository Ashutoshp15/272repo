import { Component, OnInit } from '@angular/core';
import {topcard} from '../../company-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {


  constructor(public http:HttpClient) { 

    //this.topcards=topcards;
  }
   totalDonation:number=0;
   totalcount:number=0;
   data:topcard[]=[{
    bgcolor: 'success',
    icon: 'bi bi-wallet',
    title: 0,
    subtitle: 'Total Donations'
},
{
    bgcolor: 'danger',
    icon: 'bi bi-coin',
    title: 0,
    subtitle: 'Total Charities Provided'
},
];

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
      .get<any>('/api/business/totalDonation/'+username, {
        headers: headers
      })
      .subscribe(data => {
        var tmp=JSON.stringify(data);
       this.totalDonation=JSON.parse(tmp);
      //this.searchforDetails(this.detailVar);
      this.data[0].title=this.totalDonation;
      });

      this.http
      .get<any>('/api/business/totalDonation/'+username, {
        headers: headers
      })
      .subscribe(data => {
        var tmp=JSON.stringify(data);
       this.totalDonation=JSON.parse(tmp);
      //this.searchforDetails(this.detailVar);
      this.data[0].title=this.totalDonation;
      }); this.http
      .get<any>('/api/business/donatedCharities/'+username+'/all', {
        headers: headers
      })
      .subscribe(data => {
        var tmp=JSON.stringify(data);
       ;
      //this.searchforDetails(this.detailVar);
      
       this.totalcount=Object.keys(JSON.parse(tmp)).length;
      console.log(Object.keys(JSON.parse(tmp)).length,"count of charities");
      this.data[1].title=this.totalcount;

      });
      

  }

}
