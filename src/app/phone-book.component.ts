import { Component, Input } from '@angular/core';

@Component({
  selector: 'phone-book',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class PhoneBookComponent {
  @Input() name: string;
}
