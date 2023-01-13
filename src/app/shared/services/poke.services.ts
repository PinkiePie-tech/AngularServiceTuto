import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  filter,
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
  switchMap,
  take,
} from 'rxjs';
import {
  IAbility,
  IAbilityDetail,
  IAbilityList,
  IAbilityName,
  IAbilityPokemon,
  IPokeList,
  IPokemon,
  IPokemonDetail,
  IPokemonShortDetail,
  IPokemonStat,
  IPokemonType,
  ITemporaire1,
  ITemporaire2,
} from '../models/poke.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private httpClient: HttpClient) {}

  public getAnObjectWithUrl(name: string): Observable<IPokemonStat[]> {
    return this.httpClient
      .get<IPokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map((value: IPokemonDetail) => {
          return {
            ability: value.abilities.map((ability) => {
              return ability.name;
            }),
            name: value.name,
            stats: value.stats,
            types: value.types,
            indices: value.game_indices
              .map((val) => val.version.name)
              .join(', '),
          };
        }),
        map((value: ITemporaire1) => {
          return {
            stats: value.stats,
            types: value.types.sort((a, b) => a.slot - b.slot),
          };
        }),
        map((value: ITemporaire2) => {
          return value.stats.filter((stat) => stat.stat.name === 'hp');
        })
      );
  }

  public getAnObjectWithUrlRandom(name: string): Observable<ITemporaire1> {
    return this.httpClient
      .get<IPokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map((value: IPokemonDetail) => {
          return {
            ability: value.abilities.map((ability) => {
              return ability.name;
            }),
            name: value.name,
            stats: value.stats,
            types: value.types,
            indices: value.game_indices
              .map((val) => val.version.name)
              .join(', '),
          };
        }),
        map((value: ITemporaire1) => {
          return {
            ...value,
            types: value.types.sort((a, b) => a.slot - b.slot),
            stats: value.stats.sort((a, b) => a.base_stat - b.base_stat),
          };
        })
      );
  }

  public getAListByUrl(): Observable<IPokemon[]> {
    return this.httpClient
      .get<IPokeList>(`https://pokeapi.co/api/v2/pokemon/`)
      .pipe(
        map((value: IPokeList) => {
          return value.results;
        }),
        map((value: IPokemon[]) => {
          return value.filter((val) => val.name.includes('a'));
        })
      );
  }

  public petitQuizDeLaFamille() {
    /** Histoire de changer un peu, on va faire un petit quiz ( en vrai c'est la même chose qu'avant mais bon :D ) */

    // Question 1: Que retourne cette observable, tu peux ajouter des types si ça t'aide :D
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/`).pipe(
      map((value: any) => {
        if (value.results.length > 0) {
          return value.results.map((result) => {
            let id = result.url
              .replace('https://pokeapi.co/api/v2/pokemon/', '')
              .replace('/', '');
            return {
              id: +id,
              name: result.name,
              url: result.url,
            };
          });
        }
        return null;
      }),
      filter((v) => !!v) // Je le met ici histoire de commencer à découvrir l'opérateur rxjs 'filter', il permet de déclencher l'observable en fonction d'une condition, dans notre cas, si la valeur est null ou undefined, alors l'observable n'émettera pas de résultat. Dans le code, cela permet d'éviter de faire des traitements inutiles, on s'assure avec cette mesure que si nous n'avons aucun élément présent, rien ne se déclenche.
    );
  }

  public hardcoreObservable() {
    /** L'observable que tu va voir après ça va nous permettre de complexifier nos exos, mais il ne t'ai pas demandé de le comprendre :D */

    return this.httpClient
      .get<IPokeList>(`https://pokeapi.co/api/v2/pokemon/`)
      .pipe(
        switchMap((value: IPokeList) => {
          console.log(value.results.map((v) => v.url));
          return forkJoin(value.results.map((v) => v.url));
        })
      );
  }
}
