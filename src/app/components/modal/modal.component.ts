import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
// import 'rxjs/add/operator/filter'
// import { filter } from 'rxjs'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  id: number = 0
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => {
      const temp = { ...params.params }
      this.id = temp.order
    })
  }
}
