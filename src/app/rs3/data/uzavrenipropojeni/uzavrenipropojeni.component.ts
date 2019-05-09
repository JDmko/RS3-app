import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-uzavrenipropojeni',
  templateUrl: './uzavrenipropojeni.component.html',
  styleUrls: ['./uzavrenipropojeni.component.scss']
})
export class UzavrenipropojeniComponent implements OnInit {
  animace = new TimelineMax({paused:false, reversed:false});
  public show: boolean = false;
  public buttonName: string = 'Ukázat detail';

  repeat(){
    this.animace.restart();
  }


  showOrHide(){
    this.show = !this.show;
    if(this.show)
    this.buttonName = 'Zavřít detail';
    else
    this.buttonName = 'Ukázat detail';
  }

  constructor() { }

  ngOnInit() {
    this.uzavreniPropojeni()
  }
      

  uzavreniPropojeni(){
    this.animace.to("#propojeni1", 1, {fill:'#bd0600', repeat:10},1)
    this.animace.to("#midTop", 1, {fill:'#d6b65d'}, 11)
    this.animace.to("#topRight", 1, {fill:'#d6b65d'},11.1)
    this.animace.to("#topLeft", 1, {fill:'#d6b65d'}, 11.2)
    this.animace.to("#leftDown", 1, {fill:'#d6b65d'},11.3)
  }
}
