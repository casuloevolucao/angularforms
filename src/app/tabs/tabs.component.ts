import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() form:FormGroup = new FormGroup({
    "firstName": new FormControl("", [Validators.required]),
    "lastName": new FormControl(""),
    "address": new FormGroup({
      "street": new FormControl(""),
      "city": new FormControl(""),
      "state": new FormControl(""),
      "zip": new FormControl("")
    }),
    "aliases": new FormArray([
      new FormControl("")
    ])
  })

  constructor() { }

  ngOnInit() {
  }
  
  updateProfile() {
    this.form.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }
}
