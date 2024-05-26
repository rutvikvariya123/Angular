import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('bgColor');
  } 
};

@Directive({
  selector: '[appCustomAnotherStyle]'
})
export class CustomAnotherStyleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('bgColorRed');
  }
}