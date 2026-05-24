import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPhoneFormat]'
})
export class PhoneFormatDirective {
  constructor(
    private readonly elementRef: ElementRef<HTMLInputElement>,
    private readonly renderer: Renderer2
  ) {}

  @HostListener('blur')
  onBlur(): void {
    const digits = this.elementRef.nativeElement.value.replace(/\D/g, '').slice(0, 10);

    if (digits.length === 10) {
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'value',
        `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
      );
    }
  }
}