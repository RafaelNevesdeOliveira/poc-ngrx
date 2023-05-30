import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.scss']
})
export class DisplayCounterComponent implements OnInit {
  counter$ = this.store.select('app').pipe(map((e) => e.counter))
  constructor(private store: Store<{ app: IAppState }>) { }

  ngOnInit(): void {
  }

}
