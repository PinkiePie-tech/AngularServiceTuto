import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import {
  IAbilityDetail,
  IPokeList,
  IPokemon,
  IPokemonAbility,
  IPokemonDetail,
  IPokemonShortDetail,
  IPokemonType,
} from "../models/poke.interface";

@Injectable({
  providedIn: "root",
})
export class PokeService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Toutes les fonctions vont provenir de la web api https://pokeapi.co/api/v2, on change d'API histoire de varier les plaisirs
   * Tu auras à créer les modèles des réponses http de l'API, et dans certains cas, les interfaces de sorties, et dans d'autre cas, un model dont que je t'aurai construit :D
   * Pour chaque exercice, je te donnerai l'url, cette url contiendra parfois des variables qui seront en en-têtes de la fonction
   * Ton code devra être contenu dans la fonction qui lui es associée, des interfaces seront manquante dans certain cas, il sera à ta charge de les écrire
   * le `return of()` est juste présent pour que tu puisses voir les résultats, un fois la fonction codé, tu devras supprimer cette ligne de code pour voir le résultat apparaitre dans la console
   */

  public getPokemon(): Observable<IPokemon[]> {
    /** l'url pour cette api sera la suivante : 'https://pokeapi.co/api/v2/pokemon' */
    return this.httpClient
      .get<IPokeList>("https://pokeapi.co/api/v2/pokemon")
      .pipe(
        map((pokelist: IPokeList) => {
          return pokelist.results;
        })
      );
  }

  public getPokemonByName(name: string): Observable<IPokemonDetail> {
    /** l'url pour cette api sera la suivante : `https://pokeapi.co/api/v2/pokemon/${name}` */
    return this.httpClient.get<IPokemonDetail>(
      "https://pokeapi.co/api/v2/pokemon/" + name
    );
  }

  public getPokemonById(id: number): Observable<IPokemonDetail> {
    /** l'url pour cette api sera la suivante : `https://pokeapi.co/api/v2/pokemon/${number}` */
    return this.httpClient.get<IPokemonDetail>(
      "https://pokeapi.co/api/v2/pokemon/" + id
    );
  }

  public getPokemonSorted(sort?: "asc" | "desc"): Observable<IPokemon[]> {
    /** l'url pour cette api sera la suivante : `https://pokeapi.co/api/v2/pokemon`
     * un paramètre a été ajouté, "sort" pourra être ascendant ou descendant, en fonction de la valeur qu'il prendra, les deux valeurs possible de "sort" sont 'asc' et 'desc'
     * Tu dois donc créer une condition pour transformer la donnée reçu et la trier en fonction de la valeur de sort, si aucune valeur n'est précisée, alors tu devras renvoyer le tableau comme il a été reçu
     */
    if (!!sort) {
      return this.getPokemon().pipe(
        map((pokemons: IPokemon[]) => {
          return pokemons.sort((a, b) => {
            if (sort === "asc") {
              return a.name > b.name ? 1 : -1;
            }
            if (sort === "desc") {
              return a.name > b.name ? -1 : 1;
            }
          });
        })
      );
    } else {
      return this.getPokemon();
    }
  }

  public getShortInfoByName(name: string): Observable<IPokemonShortDetail> {
    /** l'url pour cette api sera la suivante : `https://pokeapi.co/api/v2/pokemon/${name}`, le but sera de transformer la donnée pour ne prendre que l'essentiel, l'interface proposée a déjà été détaillée */
    return this.getPokemonByName(name).pipe(
      map((pokemon: IPokemonDetail) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          weight: pokemon.weight,
          height: pokemon.height,
          species: pokemon.species.name,
          types: pokemon.types.map((pokemontype: IPokemonType) => {
            return pokemontype.type.name;
          }),
        } as IPokemonShortDetail;
      })
    );
  }

  public getPokemonAbilities(): Observable<IPokemonAbility[]> {
    /** l'url pour cette api sera la suivante : `https://pokeapi.co/api/v2/ability`, aucune interface n'a été créé pour cette route, il faudra donc remplacer "any" par le type que tu auras créé, ce type correspondra exactement au retour de l'api*/
    return this.httpClient.get<IPokemonAbility[]>(
      "https://pokeapi.co/api/v2/ability"
    );
  }

  public getPokemonAbilityByName(name: string): Observable<IAbilityDetail> {
    /** l'url pour cette api sera la suivante : `https://pokeapi.co/api/v2/ability/${name}`, aucune interface n'a été créé pour cette route, il faudra donc remplacer "any" par le type que tu auras créé, ce type correspondra exactement au retour de l'api
     */
    return this.httpClient.get<IAbilityDetail>(
      "https://pokeapi.co/api/v2/ability/" + name
    );
  }
}
