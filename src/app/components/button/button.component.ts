import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button class="bg-[#A9EBF6] rounded-3xl w-full h-full text-2xl">
      {{text}}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  @Input() text: string = "Button works!";
}
