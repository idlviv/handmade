import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { VizComponent }  from './components/viz.component';
import { TabComponent }  from './components/tab.component';
import { TabsComponent }  from './components/tabs.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, VizComponent, TabsComponent, TabComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
