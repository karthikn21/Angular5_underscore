import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteComponent } from './app.pageToRouteComponent';
import { Route2Component } from './app.pageToRoute2Component';

const routes: Routes = [
    { path: 'Redirect1', component: RouteComponent },
    { path: 'Redirect2', component: Route2Component },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
