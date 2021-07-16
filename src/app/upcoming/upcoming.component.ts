import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.getUpcomingData();
  }

  getUpcomingData():void { 
    this.commonService.getUpcoming().subscribe(
      (resonse:any) => {
       console.log('resonse',resonse);
      },
      (error) => {
        console.log("search error is", error)
      }
    )
  }

}