import { Component, OnInit } from '@angular/core';
import {blogcard,blogcards} from './blog-cards-data';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html'
})
export class BlogCardsComponent implements OnInit {

  blogcards:blogcard[];
  val:string='';
  flag:boolean=false;
  constructor() { 

    this.blogcards=blogcards;
  }
redirect(){

}
  ngOnInit(): void {
    var temp = JSON.parse(localStorage.getItem('usersession') || '{}');
		var username = temp.name;
    if(username=="Infosys"||username=="infosys")
     this.flag=true;
  }

}
