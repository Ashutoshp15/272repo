import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-register_home',
  templateUrl: './register_home.component.html',
  styleUrls: ['./register_home.component.scss']
})
export class RegisterHomeComponent implements OnInit {
  first: Boolean = false;
  update: Boolean = false;
  username: string = "";
  password: string = "";
  fname: string = "";
  email: string = "";
  lname: string = "";
  role: string = "";
  orgname: string = "";
  password2: string = "";
  show: boolean = false;
  show2: boolean=false;
  show3:boolean=false;
  show4:boolean=false;
  message: string = "";
  res: any;
  constructor(public router: Router, public appService: ApiService) {

  }
  register() {
    this.show2=false;this.show3=false;this.show4=false;
    if (this.username == '' || this.email == '' || this.fname == '' || this.lname == "" || this.orgname == "" || this.password == "" || this.password2 == "" || this.role == "") {
      this.show3 = true;
    }
    else
      if (this.password != this.password2)
        this.show2 = true;
     else
     if(this.password.length<9||this.password.length>15)   {
        this.show4=true;
     }

      else {
        var body = {
          "username": this.username,
          "password": this.password,
          "firstName": this.fname,
          "lastName": this.lname,
          "email": this.email,
          "role": this.role,
          "orgName": this.orgname,
        }
        this.appService.postcall(body, '/signup').subscribe(data => {
          var tmp = JSON.stringify(data);
          this.res = JSON.parse(tmp);
        });
        console.log("user name is ");
        this.router.navigate(["/login"]);
      }
  }
  clear() {
    this.username = "";
    this.password = "";
    this.show = true;
  }

  ngOnInit() {

    var state = localStorage.getItem("loginstatus");
    if (state == "register") {
      this.first = true;
      this.update = false;
    }
    else {
      this.update = true;
      this.first = false;
    }

  }
}



