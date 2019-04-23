import { Component, OnInit, Input } from '@angular/core';
import {  FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-aliases',
  templateUrl: './aliases.component.html',
  styleUrls: ['./aliases.component.css']
})
export class AliasesComponent implements OnInit {
  @Input() form:FormGroup

  get aliases(){
    return this.form.get('aliases') as FormArray;
  }
  constructor() { }

  ngOnInit() {
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
