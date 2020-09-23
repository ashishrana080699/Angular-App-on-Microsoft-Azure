import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pract1',
  templateUrl: './pract1.component.html',
  styleUrls: ['./pract1.component.css']
})
export class Pract1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
}
