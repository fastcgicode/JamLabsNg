import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInput } from "../IInput";

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
  @Output() clickButton = new EventEmitter<IInput>();
  @Input() buttons: IInput[];

  constructor() {
  }

  ngOnInit() {
  }

  sourceButton(button: IInput) {
    this.clickButton.emit(button);
  }
}
