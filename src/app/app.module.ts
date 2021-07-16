import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LiveComponent } from './live/live.component';
import { PastComponent } from './past/past.component';
import { CommonService } from './services/common.service';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    ButtonModule,
    TableModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
  ],
  declarations: [ AppComponent, UpcomingComponent, LiveComponent, PastComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CommonService]
})

export class AppModule { }
