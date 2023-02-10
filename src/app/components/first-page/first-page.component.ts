import { Component, OnInit } from '@angular/core'
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

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.tableForm = this.formBuilder.group({
      addForm: this.formBuilder.array([]),
      editForm: this.formBuilder.array([]),
    })
    const control1 = this.tableForm.controls['addForm'] as FormArray
    for (let i = 0; i < this.adultCount; i++) {
      control1.push(this.adultForm())
    }
    const control2 = this.tableForm.controls['editForm'] as FormArray
    for (let i = 0; i < this.childCount; i++) {
      control2.push(this.childForm())
    }
    addForm: this.formBuilder.array([])
    this.createForm()
  }
  add() {
    this.addRecord = true
    console.log(this.addRecord)
  }
  createForm() {}
}
