import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss']
})
export class DisplayCounterComponent implements OnInit {
  @Input() counter = 0
  constructor() { }

  ngOnInit(): void {
  }

}
