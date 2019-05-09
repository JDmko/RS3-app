import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-odpojenirs',
  templateUrl: './odpojenirs.component.html',
  styleUrls: ['./odpojenirs.component.scss']
})
export class OdpojenirsComponent implements OnInit {
  animace = new TimelineMax({paused:false, reversed:false});
  repeat(){
    this.animace.restart();
  }

  constructor() { }

  ngOnInit() {
    this.odpojenirs()
  }

  odpojenirs(){

    this.animace.to("#V3", 1, {fill:'#BD0600', repeat:10},1)
    this.animace.to("#midRR", 1, {fill:'#D6B65D'},11)

  }

}
