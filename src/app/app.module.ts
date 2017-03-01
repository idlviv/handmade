import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { VizComponent }  from './components/viz.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, VizComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
