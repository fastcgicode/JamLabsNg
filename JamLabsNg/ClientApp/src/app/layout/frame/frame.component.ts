import { Component, OnInit } from '@angular/core';
import { IInput } from "../IInput";

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  public buttons: IInput[] = [];
  public clickedButtonName: string = "";

  constructor() {
  }

  ngOnInit() {
    for (let c = 0; c < 16; c++) {
      this.buttons.push({
        id: c.toString(),
        index: c,
        name: "button" + c,
        status: "active",
        signal: true,
        icon: 1
      });
    }
  }

  sourceClick(button: IInput) {
    this.clickedButtonName = button.name;
  }

  addButton() {
    let c = this.buttons.length;
    this.buttons.push({
      id: c.toString(),
      index: c,
      name: "button" + c,
      status: "active",
      signal: true,
      icon: 1
    });
  }
}
