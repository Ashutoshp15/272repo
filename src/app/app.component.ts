import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  // providers:[ApiService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public appService:ApiService ) {
    
  }


}

