import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInput } from "../Input";

@Component({
  selector: 'source-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() clickSource = new EventEmitter<IInput>();
  @Input() button: IInput;

  constructor() { }

  ngOnInit() {
  }

  sourceClick(buttonInput: IInput) {
    this.clickSource.emit(buttonInput);
  }
}
