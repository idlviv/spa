import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { config } from 'src/app/app.config';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  // animations: [
  //   trigger('scrollAnimation', [
  //     state('show', style({
  //       opacity: 1,
  //       transform: 'translateX(0)'
  //     })),
  //     state('hide', style({
  //       opacity: 0,
  //       transform: 'translateX(-100%)'
  //     })),
  //     transition('show => hide', animate('700ms ease-out')),
  //     transition('hide => show', animate('700ms ease-in'))
  //   ])
  // ]
})

export class HomepageComponent implements OnInit {
  elementOnScreen = 0;
  sections = config.sections;
  isAsidePopup = false;
  asideButtonClass = 'fa-angle-right';
  show = true;
  effect = 'fadeIn';

  constructor(
    // public el: ElementRef,
  ) { }

  ngOnInit() {

  }

  setEffect(event) {
    this.effect = event;
  }

  onElementOnScreen(element) {
    this.elementOnScreen = element;
  }

  scrollTo(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  switchPopup() {
    this.isAsidePopup = !this.isAsidePopup;
    this.asideButtonClass = this.isAsidePopup ? 'fa-angle-left' : 'fa-angle-right';
  }

  showPopup(visible) {
    this.isAsidePopup = visible;
    this.asideButtonClass = this.isAsidePopup ? 'fa-angle-left' : 'fa-angle-right';
  }

//   @HostListener('window:scroll', ['$event'])
//   checkScroll() {
//     const componentPosition = this.el.nativeElement.offsetTop;
//     const scrollPosition = window.pageYOffset;
// console.log('componentPosition', componentPosition);
// console.log('scrollPosition', scrollPosition);
//     if (scrollPosition >= componentPosition) {
//       this.state = 'show';
//     } else {
//       this.state = 'hide';
//     }
//   }

}
