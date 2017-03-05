import { Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'viz',
  templateUrl: './viz.component.html',
  styleUrls: ['./viz.component.css']
})
export class VizComponent  {
  name: string;
  slides: any;
  divClass: string;
  isHidden: boolean;

  constructor() {

    // this.divClass = 'red';
    this.isHidden = false;

    this.name = 'Name';
    this.slides = [
      {
        title: 'tab0',
        text: 'Bla bla bla',
        show: true,
        active: true
      },
      {
        title: 'tab1',
        text: 'Bla bla bla',
        show: false,
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
        active: true
      },
      {
        title: 'tab4',
        text: 'Bla bla bla',
        show: false,
        active: true,
      },
      {
        title: 'tab5',
        text: 'Bla bla bla',
        show: false,
        active: true,
      },
    ]
  }

  toggle(tab: number) {
    this.slides.forEach(function(item: any) {
      item.show = false;
      // console.log(item);
    });
    this.slides[tab].show = true;
  }
}

