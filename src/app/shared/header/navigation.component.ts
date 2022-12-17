import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ApiService } from './../../api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  //styleUrls: ['..../assets/scss/core/theme-colors/_theme-colors.scss']
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  constructor(private modalService: NgbModal,public appService:ApiService) {
    
  }
      catg:string="";
     showCatg:boolean=true;
     showcom:boolean=true;
     username:string="";
      data={name:"", cat:""}

  
  ngOnInit(){

    if(this.username==''||this.catg==''){
      // data=JSON.parse(localStorage.getItem("usersession"));
      var temp =localStorage.getItem('usersession');
      this.data=JSON.parse(temp||'{}');
       this.catg=this.data.cat;
       this.username=this.data.name;
    }
   
    if(this.catg=='charity'||this.username=="Smile Foundation"){
      this.showCatg=true;
      this.showcom=false;
    }
    else
   if(this.catg=='company'||this.username=="Infosys"){
      this.showCatg=false;
      this.showcom=true;
    }
   }
   ngAfterViewInit(): void {
     
   }
   // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-warning',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'German',
    code: 'de',
    icon: 'de'
  }]

}

