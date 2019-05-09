import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-uvedeni-do-provozu',
  templateUrl: './uvedeni-do-provozu.component.html',
  styleUrls: ['./uvedeni-do-provozu.component.scss']
})
export class UvedeniDoProvozuComponent implements OnInit {
  animace = new TimelineMax({paused:false, reversed:false});
  repeat(){
    this.animace.restart();
  }

  constructor() { }

  ngOnInit() {
    this.doprovozu()
  }

  doprovozu(){
    this.animace.to("#ochoz2", 1, {fill:'#BD0600', repeat:10},2)

    this.animace.to("#midRR", 1, {fill:'#D6B65D'},13)
    this.animace.to("#midR", 1, {fill:'#D6B65D'},13.5)
    this.animace.to("#midPipe", 1, {fill:'#D6B65D'},14)

    this.animace.to("#ochoz4", 1, {fill:'#028F24', repeat:10},15)

    this.animace.to("#ochozPipeTop", 1, {stroke:'#222121'},25.5)
    this.animace.to("#midPipe", 1, {fill:'#222121'},26)
    this.animace.to("#midR", 1, {fill:'#222121'},26.5)
    this.animace.to("#midRR", 1, {fill:'#222121'},27)

    this.animace.to("#V4", 1, {fill:'#028F24', repeat:10},28)
    this.animace.to("#V3", 1, {fill:'#028F24', repeat:10},28)

    this.animace.to("#ochoz3", 1, {fill:'#BD0600', repeat:10},28)
    this.animace.to("#ochoz4", 1, {fill:'#BD0600', repeat:10},28)
  }

}
