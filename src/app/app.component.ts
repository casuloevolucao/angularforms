import { Component } from '@angular/core';

export type EditorType = 'simple' | 'array' | 'tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  editor: EditorType = 'simple';

  get showSimple() {
    return this.editor === 'simple';
  }

  get showArray() {
    return this.editor === 'array';
  }

  get showTabs() {
    return this.editor === 'tabs';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
