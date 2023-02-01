import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToastService } from 'angular-toastify'
import { Location } from '@angular/common'

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ]
  editForm!: FormGroup
  delModal = false
  delSel = -1
  editSel = -1
  editValidator = false

  constructor(
    private formBuilder: FormBuilder,
    private _toastService: ToastService,
    private location: Location,
  ) {}

  ngOnInit() {}

  createForm(i: any) {
    this.editForm = this.formBuilder.group({
      position: [this.dataSource[i].position, Validators.required],
      name: [this.dataSource[i].name, Validators.required],
      weight: [this.dataSource[i].weight, Validators.required],
      symbol: [this.dataSource[i].symbol, Validators.required],
    })
  }

  Edit(i: any) {
    if (this.editSel === i) {
      if (this.editForm.valid) {
        this.dataSource[i] = {
          position: this.editForm.value.position,
          name: this.editForm.value.name,
          weight: this.editForm.value.weight,
          symbol: this.editForm.value.symbol,
        }
        this._toastService.info('Success')
        this.editSel = -1
        return
      } else {
        this.editValidator = true
      }
    } else {
      this.createForm(i)
    }
    this.editSel = i
  }

  openDelModal(i: any) {
    this.location.replaceState(`/del/${i}`)
    this.delModal = !this.delModal
    this.delSel = i
  }
  closeDelModal() {
    this.delModal = !this.delModal
  }
  delete() {
    this.dataSource.splice(this.delSel, 1)
    this.delModal = !this.delModal
    this._toastService.info('Success Delete')
  }
}
