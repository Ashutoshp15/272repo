import { Component, AfterViewInit } from '@angular/core';
import { ApiService } from '../api.service';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor(public apiservice:ApiService) {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() { 
 
  }
}
