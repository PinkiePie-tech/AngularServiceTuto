import { Component, VERSION } from '@angular/core';
import { take } from 'rxjs';
import { PokeService } from './shared/services/poke.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private pokeService: PokeService) {
  }
}
