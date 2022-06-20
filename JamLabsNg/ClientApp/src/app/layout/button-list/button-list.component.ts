import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInput } from "../IInput";

@Component({
  selector: 'button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.css']
})
export class ButtonListComponent implements OnInit {
  @Output() clickButton = new EventEmitter<IInput>();
  @Input() buttons: IInput[];

  constructor() { }

  ngOnInit() {
  }

  buttonClick(button: IInput) {
    this.clickButton.emit(button);
  }
}
