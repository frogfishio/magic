import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mg-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass'],
})
export class MgEditorComponent implements OnInit {
  @Input() type = 'text'; // text = textarea, html = tinymce, code = code editor

  constructor() {}

  ngOnInit(): void {}
}
