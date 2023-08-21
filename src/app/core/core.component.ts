import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval, of, switchMap, timer } from 'rxjs';
import { IPokemon, IPokemonDetail } from '../shared/models/poke.interface';
import { PokeService } from '../shared/services/poke.services';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnDestroy, OnInit {
  public obs1$ = of("200");
  public obs2$ = timer(2000);
  public obs3$ = interval(2000);
  public obs4$ = new BehaviorSubject<number>(100);
  public obs5$: Observable<IPokemonDetail>;


  private subs = new Subscription();

  constructor(private pokeService: PokeService) {
    // un subscribe tout simple
    this.obs1$.subscribe((value: string) => {
      console.log("obs1 => ", value)
    })

    // un subscribe identique au précédent avec un ajout dans la liste des souscriptions
    this.subs.add(
      this.obs1$.subscribe((value: string) => {
        console.log("obs1 => ", value)
      })
    )

    // deux subscribe sur le même observable provoque deux déclenchements, à éviter si c'est possible avec des shareReplay ( opérateur rxJS permettant de partager les résultats entre souscription, évitant les appels répétés)

    this.subs.add(
      this.obs2$.subscribe(() => {
        console.log("timer qui se déclenche après 2 sec");
      })
    )

    this.subs.add(
      this.obs3$.subscribe((value: number) => {
        console.log("interval qui se déclenche après 2 sec => ", value)
      })
    )

    // ici, nous venons de nous abonnez à un BehaviorSubject, chaque next sur celui ci provoquera l'effet décrit dans le subscribe
    this.subs.add(
      this.obs4$.subscribe((value: number) => {
        console.log("BehaviorSubject => ", value)
      })
    )

    // dans le cas d'un observable basé sur un appel réseau, on configure l'observable dans le constructeur
      this.obs5$ = this.pokeService.getPokemonById(1);
      // tant que je subscribe pas, je ne fais pas d'appel réseau, quand je vais subscribe, alors l'appel va se dérouler

      this.obs5$.subscribe((pokemon: IPokemonDetail) => console.log(pokemon))
  }

  ngOnInit(): void {
    // au moment de l'init, je déclenche mon Behavior Subject avec la valeur 5000
    this.obs4$.next(5000)

    // ensuite, je créé un autre observable qui au bout de 10 seconde, va ajouter 1000 au précédent

    timer(10000).subscribe(() => {
      this.obs4$.next(this.obs4$.getValue() + 1000);
    })

    // Mais soyons fifou, on peut créer un autre observable, qui au bout de 15 sec, va ajouter 1000 toutes les 1 secondes ^^
    
    timer(15000).pipe(
      switchMap(() => interval(1000))
    ).subscribe(() => {
      this.obs4$.next(this.obs4$.getValue() + 1000);
    })

    // Décrivons le process plus haut pour comprendre le switchMap ^^
    // Etape 1 j'attends 15 sec, c'est mon timer de 15 secondes => timer(15000)
    // Etape suivante, je rentre dans un switchMap, un switchMap permet de passer d'un Observable à un autre, dans notre cas, on passe de timer à interval, qui sont tout deux des observables
    // En souscrivant, je soucris donc à l'interval de 1s qui va me permettre d'ajouter 1000 à chaque itération.
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
