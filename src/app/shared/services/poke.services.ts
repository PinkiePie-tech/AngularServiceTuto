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
  ITemporaire1,
  ITemporaire2,
} from '../models/poke.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private httpClient: HttpClient) {}

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

  public filterOn(search: string): Observable<IPokemonDetail[]> {
    /** Exo 2: harcodeObservable va renvoyer la liste complète des pokemons avec leur détails, le paramètre de la fonction search est une entrée d'un utilisateur qui tape une recherche dans notre barre de recherche
     * Le but sera donc de filtrer la liste en fonctione de l'entrée utilisateur, cette entrée utilisateur peut correspondre à son nom, à une des abilités ou à son type
     * en gros, si je tape 'grass', je dois récupérer les pokemons de type herbe, ou alors un pokemon s'appellant 'grass' ou une abilité nommée 'grass'
     * Dans le monde du web, cette demande est la plus classique, un champs de recherche qui cherche dans plusieurs champs d'un objet
     */
    return this.hardcoreObservable().pipe(); // je t'ai mis en place l'appel, tu peux voir le résultat de cet appel dans la console
  }
}
