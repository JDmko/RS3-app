import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-odvodneni',
  templateUrl: './odvodneni.component.html',
  styleUrls: ['./odvodneni.component.scss']
})
export class OdvodneniComponent implements OnInit {
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
    this.odvodneni();
    this.hint();
  }

  odvodneni(){
    this.animace.to("#A", 1, {fill:'#028f24', repeat:10},1)
    this.animace.to("#B", 1, {fill:'#028f24', repeat:10},1)
    this.animace.to("#C", 1, {fill:'#028f24', repeat:10},1)
    this.animace.to("#D", 1, {fill:'#028f24', repeat:10},1)

    this.animace.to("#R2", 1, {fill:'#028f24', repeat:10},12)
    this.animace.to("#E", 1, {fill:'#028f24', repeat:10},12)

  }
 hint(){
   this.animace.to("#hint", 0.5, {opacity: 1, top: "45px"})
 }

}
