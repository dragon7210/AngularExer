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

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    @Inject(FormBuilder) fb: FormBuilder,
  ) {
    this.tableForm = fb.group({
      addForm: fb.group({
        title: ['', Validators.required],
        content: ['', Validators.required],
      }),
      editFrom: fb.group({
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
    console.log(this.tableForm)
  }
}
