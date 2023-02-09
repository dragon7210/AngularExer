import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  openModal() {
    this.router.navigate(['/modal/3'], { queryParams: { order: 'popular' } })
  }
}
