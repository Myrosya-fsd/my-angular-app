import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// ✅ константа має бути зі стрічковим значенням у лапках
const DEFAULT_HIGHLIGHT_COLOR = 'yellow';

@Directive({
  selector: '[appHighlight]', // ✅ виправлено selector
})
export class HighlightDirective {
  @Input() highlightColor: string = DEFAULT_HIGHLIGHT_COLOR; // ✅ виправлено назву та константу

  constructor(private el: ElementRef) {}

  // ✅ правильна назва методу
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  // ✅ правильна назва методу
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    // ✅ правильний доступ до nativeElement і встановлення кольору
    this.el.nativeElement.style.backgroundColor = color;
  }
}
