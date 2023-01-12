import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  header = ['First', 'Second']
  selectNum: Number = -1

  selectPage(i: any) {
    this.selectNum = i
  }
}
