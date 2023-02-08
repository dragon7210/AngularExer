import { Component } from '@angular/core'
import { HeaderService } from 'src/app/service/header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  header = ['First', 'Second']

  constructor(private headerService: HeaderService) {}
}
