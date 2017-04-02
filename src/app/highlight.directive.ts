import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor = 'green';
  };

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };

  private backgroundColor = 'white';
  constructor(){

  }
  // constructor(private elementRef:ElementRef, private renderer:Renderer) {
  //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color','green');
  // }

}
