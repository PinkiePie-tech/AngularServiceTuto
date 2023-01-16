import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable, startWith, take } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPokemonDetail, ISelectOption } from './shared/models/poke.interface';
import { PokeService } from './shared/services/poke.services';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formGroup = new FormGroup({
    search: new FormControl(''),
    type: new FormControl(''),
    ability: new FormControl(''),
  });
  public typeOptions$: Observable<ISelectOption<number>[]>;
  public abilityOptions$: Observable<ISelectOption<number>[]>;
  public dataSource$: Observable<IPokemonDetail[]>;

  constructor(private pokeService: PokeService) {
    this.dataSource$ = combineLatest([
      this.formGroup.valueChanges.pipe(startWith(this.formGroup.getRawValue())),
      this.pokeService.hardcoreObservable(),
    ]).pipe(
      map(
        ([formValues, data]: [
          { search: string; type: string; ability: string },
          IPokemonDetail[]
        ]) => {
          console.log(formValues);
          return data;
        }
      )
    );

    this.formGroup.get('search').valueChanges.subscribe(console.log);
  }
}
