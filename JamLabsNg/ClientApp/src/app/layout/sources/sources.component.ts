import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IInput } from "../IInput";

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
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
