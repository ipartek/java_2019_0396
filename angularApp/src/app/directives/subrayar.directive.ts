import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() appSubrayar: string; // color

  constructor(private element: ElementRef) {
    console.trace('SubrayarDirective constructor');
  }// constructor

  @HostListener('mouseenter')
  publiconMouseEnter() {
    console.trace(`HelloDirective mouseenter color ${this.appSubrayar}`);
    this.element.nativeElement.style.color = this.appSubrayar;
    this.element.nativeElement.style.textDecoration = 'underline';

  }// publiconMouseEnter

  @HostListener('mouseleave')
  publiconMouseLeave() {
    console.trace('HelloDirective mouseleave');
    this.element.nativeElement.style.color = 'black';
    this.element.nativeElement.style.textDecoration = 'none';

  }// publiconMouseLeave

}// SubrayarDirective
