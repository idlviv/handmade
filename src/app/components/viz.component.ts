import { Component} from '@angular/core';


@Component({
  selector: 'viz',
  template: `
    <h1>Hello {{name}}</h1>

    <div>
      <button type="button" class="btn btn-default" (click)="toggle(0)">One</button>
      <button type="button" class="btn btn-default" (click)="toggle(1)">Two</button>
      <button type="button" class="btn btn-default" (click)="toggle(2)">Three</button>

    </div>
    <div *ngFor="let slide of slides">
      <!--<div *ngIf="slide.show">-->
        <!--<h2>{{slide.title}}</h2>-->
        <!--<p>{{slide.text}}</p>-->
      <!--</div>-->

      <div [class]="divClass" [hidden]="slide.show" >
        <h2>{{slide.title}} {{slide.show}}</h2>
        <p>{{slide.text}}</p>
      </div>
    </div>

`,
})
export class VizComponent  {
  name: string;
  slides: any;
  divClass: string;
  isHidden: boolean;

  constructor() {

    this.divClass = 'red';
    this.isHidden = false;

    this.name = 'Name';
    this.slides = [
      {
        title: 'tab1',
        text: 'Bla bla bla',
        show: true,
        active: true,
      },
      {
        title: 'tab2',
        text: 'Bla bla bla',
        show: false,
        active: true,
      },
      {
        title: 'tab3',
        text: 'Bla bla bla',
        show: false,
        active: true,
      },
    ]
  }

  toggle(tab: number) {
    console.log(this.slides[tab].show);
    // this.slides.forEach(function(item: any) {
    //   // item.show = false;
    //   console.log(item);
    // });
    this.slides[tab].show = true;
  }
}

