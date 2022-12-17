import { Component, } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { about } from '../about.data';
import { ApiService } from '../api.service';
// import { Injectable } from '@angular/core';
// import { tap } from 'rxjs/operators';
// @Injectable({
//   providedIn: 'root'
//})
@Component({
	templateUrl: './about.component.html'
})
export class AboutComponent {
	constructor(private http: HttpClient, public appService: ApiService) {

	}

	username: string = "";
	catg: string = "";
	title: string = "";
	desc: string = "";
	contact: string = " ";
	detailVar: about[] = [];

	searchforDetails(data: about[]) {
		console.log("username", this.username);
		for (var i = 0; i < data.length; i++) {
			if (this.username == data[i].charityName) {
				console.log("match");
				this.title = data[i].charityName;
				this.desc = data[i].charityDescription;
				this.contact = data[i].charityContactInfo;
			}

		}
	}

	ngOnInit() {
		// API Call
		//this.title=this.appService.getGlobalVar();
		var temp = JSON.parse(localStorage.getItem('usersession') || '{}');
		this.username = temp.name;
		this.catg = temp.cat;
		let headers = new HttpHeaders({
			"Content-Type": "application/json",
			'Access-Control-Allow-Origin': '*',
			"Access-Control-Allow-Methods": "*",
			"Access-Control-Allow-Headers": "Content-Type, Accept,Origin, X-Requested-With",
			"access-control-allow-credentials": " true"
		});
		if (this.catg == "charity") {
			this.http
				.get<any>('/api/charities/all', {
					headers: headers
				})
				.subscribe(data => {
					var tmp = JSON.stringify(data);
					this.detailVar = JSON.parse(tmp);
					this.searchforDetails(this.detailVar);
				});
		}
		if (this.catg == "company") {
			{
				this.http
					.get<any>('/api/business/all', {
						headers: headers
					})
					.subscribe(data => {
						var tmp = JSON.stringify(data);
						this.detailVar = JSON.parse(tmp);

						this.title = this.username;
						if (this.username == "Infosys") {
							this.desc = "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. The company was founded in Pune and is headquartered in Bangalore. Infosys is the second-largest";
							this.contact = "contact.us@infosys.com";
						}
					});


			}
		}
	}
}
