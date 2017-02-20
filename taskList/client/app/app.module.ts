import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { AppComponent }   from './app.component';
import { TaskComponent }   from './components/tasks/tasks.component';
import { LoginComponents }   from './components/login/login.components';

import {TaskServices}  from './services/task.services';
import {LoginServices}  from './services/login.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {HomeComponent}  from './components/login/home.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,RouterModule.forRoot([{ path: 'home/:username', component:HomeComponent }])],
  declarations: [ AppComponent,TaskComponent,LoginComponents,HomeComponent],
   providers:[TaskServices,LoginServices],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 