import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

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
  }
}