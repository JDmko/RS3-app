import { Component, OnInit } from '@angular/core';
import { TimelineMax } from 'gsap';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-rs3',
  templateUrl: './rs3.component.html',
  styleUrls: ['./rs3.component.scss']
})


export class Rs3Component implements OnInit {

  menu = new TimelineMax({paused:true, reversed:true});


  
  fadeText = document.getElementsByClassName('text-content');
  fadeSvg = document.getElementsByClassName('kotelna');
  fadeHeader = document.getElementsByTagName('header');

   

   fadeAnimation(){
    

     TweenMax.set(this.fadeText, {opacity:0, y:20});
     TweenMax.set(this.fadeSvg, {opacity:0});
     TweenMax.set(this.fadeHeader, {opacity:0});


     TweenMax.to(this.fadeText, 0.5, {opacity:1, y:0});
     TweenMax.to(this.fadeSvg, 1, {opacity:1});
     TweenMax.to(this.fadeHeader, 1, {opacity:1});
   }
  


  
  constructor() {}

  ngOnInit() {
    this.createMenuAnim()
    this.fadeAnimation()
  }

  createMenuAnim(){

    this.menu.to("#topLine", .5, {rotation:'30', ease:"Expo.easeInOut"},0)
    this.menu.to("#midLine", .5, {opacity:'0', ease:"Expo.easeInOut"},0)
    this.menu.to("#botLine", .5, {rotation:'-30', ease:"Expo.easeInOut"},0)
    this.menu.to("#menuHide", .5, {top: 0, opacity: 1},0)
    
    
  }
  
  menuClick() {
    this.menu.reversed() ? this.menu.play() : this.menu.reverse();	
   }
   
  
   
}
