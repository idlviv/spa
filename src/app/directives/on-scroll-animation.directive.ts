import { Directive, HostListener, ElementRef, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationPlayer,
  AnimationBuilder,
  AnimationMetadata,
  AnimationTriggerMetadata
} from '@angular/animations';
import { sa } from '@angular/core/src/render3';

@Directive({
  selector: '[appOnScrollAnimation]',
  // animations: [
  //   trigger('scrollAnimation', [
  //     state('show', style({
  //       opacity: 1,
  //       transform: "translateX(0)"
  //     })),
  //     state('hide',   style({
  //       opacity: 0,
  //       transform: "translateX(-100%)"
  //     })),
  //     transition('show => hide', animate('700ms ease-out')),
  //     transition('hide => show', animate('700ms ease-in'))
  //   ])
  // ]

})
export class OnScrollAnimationDirective {
  player: AnimationPlayer;
  currentEffect: 'fadeOut';
  stateNeeded = true;
  @Output() scrolled = new EventEmitter();

  // @Input()
  // set show(show: boolean) {
  //   if (this.player) {
  //     this.player.destroy();
  //   }

  //   const metadata = show ? this.fadeIn() : this.fadeOut();

  //   const factory = this.builder.build(metadata);
  //   const player = factory.create(this.el.nativeElement);

  //   player.play();
  // }

  // @Input()
  // set effect(effect: string) {
  //   if (this.player) {
  //     this.player.destroy();
  //   }
  //   let metadata;
  //   if (effect === 'fadeIn') {
  //     metadata = this.fadeIn();

  //   }
  //   if (effect === 'fadeOut') {
  //     metadata = this.fadeOut();
  //   }

  //   // const metadata = effect ? this.fadeIn() : this.fadeOut();
  //   console.log('effect', effect);
  //   const factory = this.builder.build(metadata);
  //   const player = factory.create(this.el.nativeElement);

  //   player.play();
  // }

  @Input('effect') effect: boolean;

  constructor(
    private builder: AnimationBuilder,
    private el: ElementRef
  ) { }

  private setEffect(effect): AnimationMetadata[] {
    if (effect === 'fade') {
      if (!this.stateNeeded) {
        return [
          style({ opacity: '*' }),
          animate('400ms ease-in', style({ opacity: 0 })),
        ];
      } else {
        return [
          style({ opacity: 0 }),
          animate('400ms ease-in', style({ opacity: 1 })),
        ];
      }

    } else if (effect === 'appear') {
      return [
        trigger('scrollAnimation', [
          state('show', style({
            opacity: 1,
            transform: 'translateX(0)'
          })),
          state('hide', style({
            opacity: 0,
            transform: 'translateX(-100%)'
          })),
          transition('show => hide', animate('700ms ease-out')),
          transition('hide => show', animate('700ms ease-in'))
        ])
      ];
    } else if (effect === 'fadeIn') {
      return [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 })),
      ];
    }
  }

  private fadeIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 })),
    ];
  }

  private fadeOut(): AnimationMetadata[] {
    return [
      style({ opacity: '*' }),
      animate('400ms ease-in', style({ opacity: 0 })),
    ];
  }

  isElementAppear(elem) {
    const box = elem.getBoundingClientRect();
    const elementTop = box.top;
    const elementBottom = box.bottom;
    if (elementTop <= innerHeight - innerHeight * .4) {
      return true;
    } else {
      return false;
    }

  }

  doAnimation(effect) {
    if (this.currentEffect === effect) {
      return;
    } else {

      if (this.player) {
        this.player.destroy();
      }
      let metadata;
    if (effect === 'fadeIn') {
      metadata = this.fadeIn();

    }
    if (effect === 'fadeOut') {
      metadata = this.fadeOut();
    }

      // const metadata = this.setEffect(this.effect);
  
      const factory = this.builder.build(metadata);
      const player = factory.create(this.el.nativeElement);
      player.play();
      this.currentEffect = effect;
    }
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
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    // if (scrollPosition >= componentPosition) {
    //   this.scrolled.emit('fadeIn');
    // } else {
    //   this.scrolled.emit('fadeOut');
    // }

    if (this.isElementOnScreen(this.el.nativeElement)) {
      this.doAnimation('fadeIn');
      // this.scrolled.emit('fadeIn');
    } else {
      this.doAnimation('fadeOut');

      // this.scrolled.emit('fadeOut');
    }
  }
  // checkScroll() {
  //   const componentPosition = this.el.nativeElement.offsetTop;
  //   const scrollPosition = window.pageYOffset;

  //   if (scrollPosition >= componentPosition) {
  //     this.state = 'show';
  //   } else {
  //     this.state = 'hide';
  //   }

  // }

}
