import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { IInput } from "./IInput";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, AfterViewChecked {
  public buttons: IInput[] = [];
  public destButtons: IInput[] = [];
  public clickedButtonName: string = "";

  constructor() {
  }

  ngOnInit() {
    for (let c = 0; c < 16; c++) {
      this.buttons.push({
        id: c.toString(),
        index: c,
        name: "sourcebutton" + c,
        status: "active",
        signal: true,
        icon: 1
      });
      this.destButtons.push({
        id: c.toString(),
        index: c,
        name: "destButton" + c,
        status: "active",
        signal: true,
        icon: 1
      });
    }
  }

  onResize() {
    const c = document.getElementById("contents");
    const s = document.getElementById("sources");
    const d = document.getElementById("destinations");
    const cw = document.getElementById("canvas-wrapper");
    const ca = document.getElementById("canvas");
    if (c && s && d && cw && ca) {
      s.style.height = c.offsetHeight + "px";
      d.style.height = c.offsetHeight + "px";
      ca.style.marginLeft = ((cw.offsetWidth - ca.offsetWidth) / 2) + "px";
    }
  }

  ngAfterViewChecked() {
    const c = document.getElementById("contents");
    const s = document.getElementById("sources");
    const d = document.getElementById("destinations");
    const cw = document.getElementById("canvas-wrapper");
    const ca = document.getElementById("canvas");
    if (c && s && d && cw && ca) {
      s.style.height = c.offsetHeight + "px";
      d.style.height = c.offsetHeight + "px";
      ca.style.marginLeft = ((cw.offsetWidth - ca.offsetWidth) / 2) + "px";
    }
  }

  buttonClick(button: IInput) {
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
