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
  IPokemonType,
} from '../models/poke.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private httpClient: HttpClient) {}

  public getAnObjectWithUrl(name: string) {
    return this.httpClient
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map((value: any) => {
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
        map((value) => {
          return {
            stats: value.stats,
            types: value.types.sort((a, b) => a.slot - b.slot),
          };
        }),
        map((value) => {
          return value.stats.filter((stat) => stat.stat.name === 'hp');
        })
      );
  }

  public getAnObjectWithUrlRandom(name: string) {
    return this.httpClient
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map((value: any) => {
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
        map((value) => {
          return {
            ...value,
            types: value.types.sort((a, b) => a.slot - b.slot),
            stats: value.stats.sort((a, b) => a.slot - b.slot),
          };
        })
      );
  }

  public getAListByUrl() {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/`).pipe(
      map((value: any) => {
        return value.results;
      }),
      map((value) => {
        return value.filter((val) => val.name.includes('a'));
      })
    );
  }
}
