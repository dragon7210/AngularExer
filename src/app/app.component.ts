import { HeaderService } from './service/header.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test'
  headerSel: Number = 0

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    this.headerService.getHeaderSel().subscribe((res) => {
      this.headerSel = res
    })
  }
}
