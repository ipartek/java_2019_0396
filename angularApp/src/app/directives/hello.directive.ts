import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  // @Input() appHello: string;
  @Input() colorTexto: string;
  @Input() colorFondo: string;

  constructor(private element: ElementRef) {
    console.trace('HelloDirective constructor');

  }// constructor


  @HostListener('mouseenter')
  publiconMouseEnter() {
    console.trace('HelloDirective mouseenter ');
    this.element.nativeElement.style.backgroundColor = this.colorFondo;
    this.element.nativeElement.style.color = this.colorTexto;

  }// publiconMouseEnter

  @HostListener('mouseleave')
  publiconMouseLeave() {
    console.trace('HelloDirective mouseleave');
    this.element.nativeElement.style.backgroundColor = 'white';
    this.element.nativeElement.style.color = 'black';

  }// publiconMouseLeave


}// HelloDirective
