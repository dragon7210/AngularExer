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
  id: any = {}

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((event: any) => {
      this.id = event.id
    })
    this.route.queryParamMap.subscribe((params: any) => {
      const temp = { ...params.params }
      console.log(temp.order)
    })
  }
}
