import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-otevreni-rs',
  templateUrl: './otevreni-rs.component.html',
  styleUrls: ['./otevreni-rs.component.scss']
})
export class OtevreniRsComponent implements OnInit {
  animace = new TimelineMax({paused:false, reversed:false});
  repeat(){
    this.animace.restart();
  }

  constructor() { }

  ngOnInit() {
    this.otevreni()
  }

  otevreni(){
    this.animace.to("#R1", 1, {fill:'#028F24', repeat:10},3)
    this.animace.to("#R3", 1, {fill:'#028F24', repeat:10},3)

    this.animace.to("#E", 1, {fill:'#BD0600', repeat:10},14)
  }

}
