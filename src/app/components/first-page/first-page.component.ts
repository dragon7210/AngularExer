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

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.tableForm = fb.group({
      addForm: fb.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
      }),
      editForm: fb.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
      }),
    })
  }

  ngOnInit() {}

  add() {
    this.addRecord = true
  }
  put() {
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
    this.dataArray[i].title = (this.tableForm.controls[
      'editForm'
    ] as any).controls.title.value
    this.dataArray[i].content = (this.tableForm.controls[
      'editForm'
    ] as any).controls.content.value
  }
  cancel() {
    this.addRecord = false
  }
  save() {}
}
