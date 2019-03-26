import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { config } from 'src/app/app.config';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  el: ElementRef;
  scrolledSection = 0;
  sections = config.sections;
  constructor() { }
  isAsidePopup = false;
  asideButtonClass = 'fa-angle-right';

  ngOnInit() {

  }

  onScrollSection(section) {
    this.scrolledSection = section;
  }

  scrollTo(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: 'smooth'});
  }

  switchPopup() {
    this.isAsidePopup = !this.isAsidePopup;
    this.asideButtonClass = this.isAsidePopup ? 'fa-angle-left' : 'fa-angle-right';
  }

  showPopup(visible) {
    this.isAsidePopup = visible;
    this.asideButtonClass = this.isAsidePopup ? 'fa-angle-left' : 'fa-angle-right';
  }
}
