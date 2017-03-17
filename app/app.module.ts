import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';

import { Component } from '@angular/core';

@Component({
  selector: 'eager',
  template: 'EAGER'
})
export class EagerComponent { }

const routes: Route[] = [
  { path: '', component: EagerComponent },
  { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, EagerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
