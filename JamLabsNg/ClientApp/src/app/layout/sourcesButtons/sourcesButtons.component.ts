import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInput } from "../IInput";

@Component({
  selector: 'sources-buttons',
  templateUrl: './sourcesButtons.component.html',
  styleUrls: ['./sourcesButtons.component.css']
})
export class SourcesButtonsComponent implements OnInit {
  @Output() clickButton = new EventEmitter<IInput>();
  @Input() buttons: IInput[];

  constructor() { }

  ngOnInit() {
  }

  sourceClick(button: IInput) {
    this.clickButton.emit(button);
  }
}
