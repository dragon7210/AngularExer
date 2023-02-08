import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  header = ['First', 'Second']
  url: string = 'first'

  constructor() {}

  select(i: number) {
    if (i === 0) {
      this.url = 'first'
    }
    if (i === 1) {
      this.url = 'second'
    }
  }
}
