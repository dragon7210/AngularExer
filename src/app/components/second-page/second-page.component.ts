import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  openModal() {
    this.router.navigate(['/modal'], { queryParams: { order: '1' } })
  }
}
