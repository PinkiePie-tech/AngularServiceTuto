import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { ISelectOption } from './shared/models/poke.interface';
import { PokeService } from './shared/services/poke.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formGroup = new FormGroup({
    search: new FormControl(),
    type: new FormControl(),
    zone: new FormControl(),
  });
  public typeOptions$: Observable<ISelectOption<number>[]>;
  public zoneOptions$: Observable<ISelectOption<number>[]>;

  constructor(private pokeService: PokeService) {}
}
