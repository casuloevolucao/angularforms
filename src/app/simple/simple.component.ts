import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

}
