import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-otevreni-propojeni',
  templateUrl: './otevreni-propojeni.component.html',
  styleUrls: ['./otevreni-propojeni.component.scss']
})
export class OtevreniPropojeniComponent implements OnInit {
  animace = new TimelineMax({paused:false, reversed:false});
  repeat(){
    this.animace.restart();
  }

  constructor() { }

  ngOnInit() {
    this.otevrenipropojeni()
  }

  otevrenipropojeni(){
    this.animace.to("#propojeni1", 1, {fill:'#028F24', repeat:10},1)

    this.animace.to("#midTop", 1 , {fill:'#222121'},11)
    this.animace.to("#topRight", 1 , {fill:'#222121'},11.5)
    this.animace.to("#topLeft", 1 , {fill:'#222121'},11.5)
    this.animace.to("#leftDown", 1 , {fill:'#222121'},12)
  }

}
