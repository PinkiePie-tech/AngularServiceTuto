import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  filter,
  forkJoin,
  map,
  mergeMap,
  Observable,
  of,
  shareReplay,
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
  ISelectOption,
  ITemporaire1,
  ITemporaire2,
} from '../models/poke.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private httpClient: HttpClient) {}

  public hardcoreObservable(): Observable<IPokemonDetail[]> {
    /** L'observable que tu va voir après ça va nous permettre de complexifier nos exos, mais il ne t'ai pas demandé de le comprendre :D */

    return this.httpClient
      .get<IPokeList>(`https://pokeapi.co/api/v2/pokemon/`)
      .pipe(
        switchMap((value: IPokeList) => {
          // switchMap permet de passer d'un observable à un autre, dans notre cas présent, on passe d'un appel pour récupérer la liste des pokemons, et on switch sur un appel qui récupère les 20 détails de cahque pokemon
          return forkJoin(
            // forkJoin permet de faire des appels d'observable groupé, dans notre cas, on prend les 20 pokemons dans la liste de pokemon, et on effectue 20 appels réseaux, une fois les appels réseaux effectués, on retourne les 20 résultats, ce qui nous donnera un tableau de PokemonDetail
            value.results.map((v) => this.httpClient.get<IPokemonDetail>(v.url))
          );
        }),
        shareReplay({ refCount: true, bufferSize: 1 }) // shareReplay est aussi un opérateur, il va permettre d'éviter que si 50 personnes subscribe à cet observable, le résulat soit partagé et non recalculé, évitant ainsi 50 appels * 20 à l'api
      );
  }

  public getTypes(): Observable<ISelectOption<number>> {
    // Modifier cette fonction pour renvoyer le type suivant Observable<ISelectOption<number>> depuis l'url https://pokeapi.co/api/v2/type
    return of();
  }

  public getZones(): Observable<ISelectOption<number>> {
    // Modifier cette fonction pour renvoyer le type suivant Observable<ISelectOption<number>> depuis l'url https://pokeapi.co/api/v2/region
    return of();
  }
}
