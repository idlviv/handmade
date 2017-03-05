import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routes } from './app.router'

import { AppComponent }  from './app.component';
import { VizComponent }  from './components/viz.component';
import { TabComponent }  from './components/tab.component';
import { TabsComponent }  from './components/tabs.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routes ],
  declarations: [ AppComponent, VizComponent, TabsComponent, TabComponent,  AboutComponent,  HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
