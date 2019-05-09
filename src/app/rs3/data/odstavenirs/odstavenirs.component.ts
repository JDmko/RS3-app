import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-odstavenirs',
  templateUrl: './odstavenirs.component.html',
  styleUrls: ['./odstavenirs.component.scss']
})
export class OdstavenirsComponent implements OnInit {
  animace = new TimelineMax({paused:false, reversed:false});
  repeat(){
    this.animace.restart();
  }

  constructor() { }

  ngOnInit() {
    this.odstavenirs()
  }

  odstavenirs(){
    
    this.animace.to("#R1", 1, {fill:'#BD0600', repeat:10},1)
    this.animace.to("#R3", 1, {fill:'#BD0600', repeat:10},1)
    this.animace.to("#R2", 1, {fill:'#BD0600', repeat:10},1)

    this.animace.to("#rightPipe", 1, {fill:'#D6B65D'},11)
    this.animace.to("#botPipe", 1, {fill:'#D6B65D'},11.5)
    this.animace.to("#leftPipe", 1, {fill:'#D6B65D'},12)

    this.animace.to("#A", 1, {fill:'#028F24', repeat:10},13)
    this.animace.to("#B", 1, {fill:'#028F24', repeat:10},13)
    this.animace.to("#C", 1, {fill:'#028F24', repeat:10},13)
    this.animace.to("#D", 1, {fill:'#028F24', repeat:10},13)
  }

}
