import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInput } from "../../layout/IInput";

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() clickButton = new EventEmitter<IInput>();
  @Input() button: IInput;

  constructor() { }

  ngOnInit() {
  }

  buttonClick(buttonInput: IInput) {
    this.clickButton.emit(buttonInput);
  }
}
