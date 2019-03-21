import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  el: ElementRef;
  scrolledSection = 0;
  sections = ['section0', 'section1', 'section2'];
  constructor() { }

  ngOnInit() {

  }

  onScrollSection(section) {
    this.scrolledSection = section;
  }

  scrollTo(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: 'smooth'});
  }
}
