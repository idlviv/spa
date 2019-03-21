import { Directive, HostListener, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appScrolling]'
})
export class ScrollingDirective implements OnInit {

  @Output() scrollSection = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // if (this.isElementOnScreen(this.elementRef.nativeElement)) {
    //   this.scrollSection.emit(this.elementRef);
    // }
  }

  isElementOnScreen(elem) {
    // elem.getBoundingClientRect(); видима обасть екрану до елемента
    // pageYOffset верх сторінки до верху видимой обасті
    // innerHeight висота видимої області
    const box = elem.getBoundingClientRect();
    // const screenTop = pageYOffset;
    // const screenBottom = pageYOffset + innerHeight;
    const elementTop = box.top;
    const elementBottom = box.bottom;
    if (elementBottom > 0 && elementTop <= innerHeight - innerHeight * .4) {
      return true;
    } else {
      return false;
    }
  }


  @HostListener('window:scroll', ['$event.target'])
    onScroll() {
      if (this.isElementOnScreen(this.elementRef.nativeElement)) {
        this.scrollSection.emit();
      }
    }

}
