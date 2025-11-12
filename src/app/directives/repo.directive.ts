import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[repoHighlight]',
  standalone: true,
})
export class RepoDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.repoHighlight('scale(1.02)', '1px solid #FFFF');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.repoHighlight('scale(1)', 'none');
  }

  private repoHighlight(transform: string, border: string) {
    const element = this.el.nativeElement;
    element.style.transform = transform;
    element.style.border = border;
    element.style.transition = 'transform 0.3s ease-in-out';
  }
}
