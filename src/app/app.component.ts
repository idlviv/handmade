import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <p>{{name}}</p>
    <tabs>
      
      <tab [tabTitle]="'Tab 1'">Tab 1 Content</tab>
      <tab tabTitle="Tab 2">Tab 2 Content</tab>
    </tabs>
  `
})
export class AppComponent {
  name: string;

  constructor() {
    this.name = 'Angular2'
  }
}

