import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  // styleUrls: ['./author.component.scss']
  styles: [
    `
      h1 {
        font-size: 12px;
        color: #8c8c8c;
        /* background-color: transparent !important; */
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AuthorComponent {}
