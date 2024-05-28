import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button class="bg-[#A9EBF6] rounded-3xl w-full h-full text-2xl border border-[#3E5CC6]">
      {{text}}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  @Input() text: string = "Button works!";
}
