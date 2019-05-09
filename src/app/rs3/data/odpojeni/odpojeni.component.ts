import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-odpojeni',
  templateUrl: './odpojeni.component.html',
  styleUrls: ['./odpojeni.component.scss']
})
export class OdpojeniComponent implements OnInit {
  animace = new TimelineMax({paused:false, reversed:false});
  repeat(){
    this.animace.restart();
  }

  constructor() { }

  ngOnInit() {
    this.odpojeni()
  }

  odpojeni(){
    this.animace.to("#V5", 1, {fill:'#BD0600', repeat:10},1)
    this.animace.to("#podV5", 1, {fill:'#D6B65D'},10.5)
  }

}
