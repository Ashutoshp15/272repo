import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
//import { NavigationComponent } from "../shared/header/navigation.component";
import { ApiService } from "../api.service";
import {login} from "../about.data";

declare var $: any;
@Component({
 // providers:[ApiService],
  selector: "app-full-layout",
  templateUrl: "./home_login.component.html",
  styleUrls: ["./home_login.component.scss"],
})
export class HomeLoginComponent {
  Category: string = "company";
  username: string = "";
  password: string = "";
  show: boolean = false;
  error:boolean=false;
  error1:boolean=false;
  error2:boolean=false;
  data={name:"", cat:""}
  res:any;
  constructor(public router: Router, public appService: ApiService) {
    console.log("home login constructor");
  }
  submit() {
    console.log("user name is " + this.username);
    this.error1=false;
    this.error2=false;
    if(this.username==""){
      this.error1=true;
    }
    else
    if(this.password==""){
      this.error2=true;
    }
    else{
    var body={
      "username":this.username,
      "password":this.password
    }
    this.appService.postcall(body,'/login').subscribe(data => {
      var tmp = JSON.stringify(data);
       this.res= JSON.parse(tmp);
    });
    console.log("res from login",this.res);
      this.data.cat=this.Category;
      this.data.name=this.username;
     localStorage.setItem("usersession",JSON.stringify(this.data));
     localStorage.setItem("loginstatus","login");

    
    if(this.username=="Smile Foundation" ||this.username=="Rapid response"){
      this.Category="charity";
      this.show=true;
      console.log("Login Success for Charity");
    }
    else
    if(this.username=="Infosys" ||this.username=="Barclays"){
      this.Category="company";
      this.show=true;
      console.log("Login Success for Business");
    }
    else{
      this.error=true;
    }
    if (this.Category == "charity" && this.show==true) {
      this.router.navigate(["/dashboard"]);
    }
  

    else {
      if(this.show==true){
      this.router.navigate(["/company"]);
    }
  }
  }
  //this.clear();
  }
  register() {
    localStorage.setItem("loginstatus","register");
    this.router.navigate(["/register"]);

  }
  clear() {
    this.username = "";
    this.password = "";
    this.error=false;
   
  }

  ngOnInit() {

  }
}


