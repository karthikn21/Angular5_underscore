import { Config } from './configration';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouteComponent } from './app.pageToRouteComponent';
import { Route2Component } from './app.pageToRoute2Component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ConfigService} from './config.service';
import * as _ from 'underscore';
@NgModule({
    imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, HttpClientModule],
    declarations: [AppComponent, RouteComponent, Route2Component],
    bootstrap: [AppComponent],
    providers: [ ConfigService ]
})
export class AppModule { }

