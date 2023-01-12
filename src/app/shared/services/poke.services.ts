import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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
}
