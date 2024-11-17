import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  template: `
    <p>
      Marvellous Infosystems
    </p>
    <input type="text">
  `,
  styles: `
  p {
        color: blue;
  }
  `
})
export class MarvellousComponent {

}
