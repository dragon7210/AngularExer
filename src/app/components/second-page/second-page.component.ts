import { Component, OnInit } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalComponent } from '../modal/modal.component'
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent implements OnInit {
  file: any
  fileName: string = ''
  arrayBuffer: any
  value: any
  dataArray: any = []

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  incomingfile(event: any) {
    this.file = event.target.files[0]
    this.value = ''
    this.fileName = this.file.name
    let fileReader = new FileReader()
    fileReader.onload = () => {
      this.arrayBuffer = fileReader.result
      var data = new Uint8Array(this.arrayBuffer)
      var arr = new Array()
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i])
      var bstr = arr.join('')
      var workbook = XLSX.read(bstr, { type: 'binary', cellDates: false })
      var first_sheet_name = workbook.SheetNames[0]
      var worksheet = workbook.Sheets[first_sheet_name]
      this.dataArray = XLSX.utils.sheet_to_json(worksheet)
      console.log(this.dataArray)
    }
    fileReader.readAsArrayBuffer(this.file)
  }
  openModal() {
    const modalRef = this.modalService.open(ModalComponent, {
      backdrop: 'static',
      keyboard: false,
    })
    modalRef.componentInstance.title = 'Confirm action'
    modalRef.componentInstance.message = 'Are you sure you want to do this?'
    modalRef.componentInstance.onConfirm.subscribe(() => {})
    modalRef.componentInstance.onCancel.subscribe(() => {})
  }
}
