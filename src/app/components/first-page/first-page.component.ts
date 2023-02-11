import { Component, Inject, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  addRecord = false
  tableForm!: FormGroup
  dataArray = [{ title: 'john', content: 'test' }]
  temp: any = []
  selEdit = -1

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.tableForm = this.fb.group({})
  }

  add() {
    this.selEdit = -1
    this.addRecord = true
    this.tableForm = this.fb.group({
      addForm: this.fb.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
      }),
    })
  }
  put() {
    this.temp = []
    this.temp.title = (this.tableForm.controls[
      'addForm'
    ] as any).controls.title.value
    this.temp.content = (this.tableForm.controls[
      'addForm'
    ] as any).controls.content.value
    this.dataArray.push(this.temp)
    this.addRecord = false
  }
  edit(i: number) {
    this.selEdit = i
    this.tableForm = this.fb.group({
      editForm: this.fb.group({
        title: [this.dataArray[i].title, Validators.required],
        content: [this.dataArray[i].content, Validators.required],
      }),
    })
  }
  addCancel() {
    this.addRecord = false
  }
  editCancel() {
    this.selEdit = -1
  }
  save(i: number) {
    this.dataArray[i].title = (this.tableForm.controls[
      'editForm'
    ] as any).controls.title.value
    this.dataArray[i].content = (this.tableForm.controls[
      'editForm'
    ] as any).controls.content.value
    this.selEdit = -1
  }
  delete(i: number) {
    this.dataArray.splice(i, 1)
  }
}
