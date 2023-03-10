import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  id: number = 0
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => {
      const temp = { ...params.params }
      this.id = temp.order
    })
  }
  back() {
    this.router.navigate(['/first'])
  }
}
