import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1
  initialTop : number = 0

  constructor(private eleRef : ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().backgroundPosition
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event : any) {
    this.eleRef.nativeElement.style.backgroundPosition = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}
