import { Component, OnInit } from '@angular/core';
import { IInput } from "./Input";

@Component({
  selector: 'sources-buttons',
  templateUrl: './sourcesButtons.component.html',
  styleUrls: ['./sourcesButtons.component.css']
})
export class SourcesButtonsComponent implements OnInit {
  public buttons: IInput[] = [];
  public clickedButtonName: string = "";

  constructor() { }

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

  showButton(button: IInput) {
    this.clickedButtonName = button.name;
  }
}
