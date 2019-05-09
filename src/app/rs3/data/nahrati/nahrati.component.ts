import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';

@Component({
  selector: 'app-nahrati',
  templateUrl: './nahrati.component.html',
  styleUrls: ['./nahrati.component.scss']
})
export class NahratiComponent implements OnInit {
  animace = new TimelineMax({paused:false, reversed:false, restart:true});
  
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
    this.nahrati()
  }

  nahrati(){
    
    this.animace.to("#ochoz2", 1, {fill:'#028f24', repeat:10},1)
    this.animace.to("#ochoz3", 1, {fill:'#028f24', repeat:10},1)

    this.animace.to("#midPipe", 1, {fill:'#222121'},10.5)
    this.animace.to("#ochozPipeBot", 1, {stroke:'#222121'},10.4)
    this.animace.to("#midR", 1, {fill:'#222121'},11)
    this.animace.to("#ochozPipeMid", 1, {stroke:'#222121'},11)
    this.animace.to("#midRR", 1, {fill:'#222121'},11.1)

    

  }


  
}
