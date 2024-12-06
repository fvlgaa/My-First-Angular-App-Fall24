import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true
})
export class FocusDirective {
  @Input() appFocus ='';
  constructor(private el:ElementRef) { }

  @HostListener('focus') onFocus() {
    this.focus  (this.appFocus ||"teal");

  }

  @HostListener('blur') onBlur() {
    this.focus ('');
  }
  private focus(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
