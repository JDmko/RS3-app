import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-propojeni',
  templateUrl: './propojeni.component.html',
  styleUrls: ['./propojeni.component.scss']
})
export class PropojeniComponent implements OnInit {
  animace = new TimelineMax({paused:false, reversed:false});
  repeat(){
    this.animace.restart();
  }

  constructor() { }

  ngOnInit() {
    this.propojeni()
  }

  propojeni(){

    this.animace.to("#ochoz2", 1, {fill:'#028F24', repeat:10},1)
    this.animace.to("#ochozPipeBot", 1, {stroke:'#222121'},10)

    this.animace.to("#V2", 1, {fill:'#028f24', repeat:10},12)

    this.animace.to("#ochoz2", 1, {fill:'#BD0600', repeat:10},23)
    this.animace.to("#ochozPipeBot", 1, {stroke:'#D6B65D'},33)


  }

}
