import { Component } from '@angular/core';
import {  FormArray, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {

  form:FormGroup = new FormGroup({
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


  get aliases(){
    return this.form.get('aliases') as FormArray;
  }


  constructor() { }

  updateProfile() {
    this.form.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(new FormControl(""));
  }

  deleteAlias(i:number){
    this.aliases.removeAt(i)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.form.value);
  }
}
