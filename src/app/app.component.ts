import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, decrementaContador, incrementaContador } from './store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poc-ngrx';
  counter$ = this.store.select('app').pipe(map((e) => e.counter))

  constructor(private store: Store<{ app: IAppState }>) { }

  incrementaContador() {
    this.store.dispatch(incrementaContador())
  }

  decrementaContador() {
    this.store.dispatch(decrementaContador())

  }
}
