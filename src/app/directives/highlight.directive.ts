import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('scale(1.05)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('scale(1)');
  }

  private highlight(transform: string) {
    this.el.nativeElement.style.transform = transform;
    this.el.nativeElement.style.transition = 'transform 0.3s ease-in-out';
  }
}