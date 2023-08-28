import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  findIndex,
  map,
  startWith,
  switchMap,
  take,
} from "rxjs";
import {
  IPokemon,
  IPokemonDetail,
  IPokemonType,
  IType,
  ITypeDetail,
} from "../shared/models/poke.interface";
import { PokeService } from "../shared/services/poke.services";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.css"],
})
export class ExerciceComponent {
  public fcInput = new FormControl<string>("");
  public fcType = new FormControl<string>("water");

  public pokemons$?: Observable<IPokemon[]>;
  public pokemonsFilt$?: Observable<IPokemon[]>;
  public pokemonTypes$?: Observable<IType[]>;
  public pokemonTypeFilt$?: Observable<IPokemon[]>;
  public pokemonSearch$?: Observable<IPokemon[]>;
  public collection$ = new BehaviorSubject<IPokemon[]>([]);

  constructor(private pokeService: PokeService) {
    this.fcInput.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((input: string | null) => console.log(input));

    this.pokemons$ = this.pokeService.getPokemon();
    this.pokemonTypes$ = this.pokeService.getPokemonType();

    this.pokemonsFilt$ = this.fcInput.valueChanges.pipe(
      startWith(this.fcInput.getRawValue()),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((input: string | null) => {
        return this.pokeService.getPokemon().pipe(
          map((pokemons: IPokemon[]) => {
            return pokemons.filter((pokemon: IPokemon) => {
              return pokemon.name
                .toLocaleLowerCase()
                .includes(input?.toLocaleLowerCase() ?? "");
            });
          })
        );
      })
    );
    //KO
    this.pokemonTypeFilt$ = this.fcType.valueChanges.pipe(
      switchMap((input: string | null) => {
        return this.pokeService.getPokemonTypeByName(input).pipe(
          map((types: ITypeDetail) => {
            return types.pokemon.map(
              (type: { pokemon: IPokemon; slot: number }) => {
                return type.pokemon;
              }
            );
          })
        );
      })
    );

    this.pokemonSearch$ = combineLatest([
      this.fcInput.valueChanges.pipe(startWith(this.fcInput.getRawValue())),
      this.fcType.valueChanges.pipe(startWith(this.fcType.getRawValue())),
      this.collection$,
    ]).pipe(
      switchMap(
        ([search, type, collection]: [
          string | null,
          string | null,
          IPokemon[]
        ]) => {
          return this.pokeService.getPokemonTypeByName(type).pipe(
            map((type: ITypeDetail) => {
              return type.pokemon
                .map(
                  (pokemon: { pokemon: IPokemon; slot: number }) =>
                    pokemon.pokemon
                )
                .filter((pokemon: IPokemon) => {
                  return pokemon.name
                    .toLocaleLowerCase()
                    .includes(search?.toLocaleLowerCase() ?? "");
                })
                .filter((pokemon: IPokemon) => {
                  return !collection.find((poke: IPokemon) => {
                    return poke.name === pokemon.name;
                  });
                });
            })
          );
        }
      )
    );
    this.collection$.subscribe((pokemons: IPokemon[]) => {
      console.log(pokemons);
      // let index:number = this.pokeService.getPokemonByName(pokemons
      //   .map((poke:IPokemon)=> poke.name))
      //   .pipe(
      //   map((pokem:IPokemonDetail)=> pokem.id)
      // ),
      // pokemons.splice(index, 1);
    });
  } //fin constructor

  addPokemon(pokemon: IPokemon) {
    let pokemons: IPokemon[] = this.collection$.value;

    pokemons.push(pokemon);
    this.collection$.next(pokemons);
  }

  delPokemon(pokemon: IPokemon) {
    let pokemons: IPokemon[] = this.collection$.value;
    let index: number = pokemons.findIndex((index: IPokemon) => {
      return index.name === pokemon.name;
    });

    pokemons.splice(index, 1);
    this.collection$.next(pokemons);
    //this.collection$.pipe(take(1)).subscribe;
  }

  //OK// Exercice 1 : Créer un input text avec un formControl

  //OK// Exercice 2 : Afficher la valeur a chaque saisie clavier dans le formControl

  //OK// Exercice 3 : Améliorons la saisie, ne provoquons un évènement que toutes les 200 millisecondes
  //OK//* Exercice 3.1 : On peut vérifier que si la valeur est la même, on ne réaffiche pas la valeur

  //OK// Exercice 4 : Créer un observable permettant de récupérer la liste des pokemons

  //OK// Exercice 5 : Faire appel à cette observable dans la vue

  // Exercice 6 : Filter la liste en fonction de la valeur saisie  dans l'input
  // Exercice 6.1 : En premier avec un bouton si plus simple
  //OK//* Exercice 6.2 : Directement depuis le changement de valeur

  //OK// Exercice 7 : Ajouter  un input en Select, la liste des options sera les types de pokemons

  // Exercice 8 : Filter en fontion du type sélectionné
  // Exercice 8.1 : Filter d'abord uniquement sur le select
  //KOxx* Exercice 8.2 : Filter sur les deux en même temps si tu te sens chaud patate

  //OK Exercice 9 : Ajouter un clic sur un élément de la liste, lors de ce clic, appeler le service pour avoir les details sur le pokemon qu'on a sélectionné
  //OK* Exercice 9.1 : Tu peux en première étape juste faire un console log de l'élément que tu as cliqué

  // Exercice 10 : Créer un bouton ajouter dans la liste permettant de rajouter cette élément à la collection
  // Exercice 10.1 : Ce bouton ajoutera un élément dans un tableau non observable
  //KO* Exercice 10.2 : Ce bouton ajoutera un élément dans un tableau observable (BehaviorSubject)

  // Exercice 11 : Afficher la liste des pokemons rajoutés,
  //avec une input pour pouvoir filtrer, un select par type,
  // un bouton supprimer pour les retirer de la liste

  // Exercice 12 : Si un pokemon est dans la liste des pokemons ajoutés, ne pas l'afficher ^^
}
