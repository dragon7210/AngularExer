import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string | undefined
  @Input() message: string | undefined
  @Output() onConfirm = new EventEmitter()
  @Output() onCancel = new EventEmitter()
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
  ) {}
  ngOnInit(): void {}
  confirm() {
    this.activeModal.close()
    this.onConfirm.emit()
  }
  cancel() {
    this.activeModal.dismiss()
    this.onCancel.emit()
  }
}
