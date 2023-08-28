import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, debounceTime, distinctUntilChanged, filter, interval, of, switchMap, take, timer } from 'rxjs';

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
  public obs6$ = new BehaviorSubject<number>(0);


  private subs = new Subscription();

  constructor() {
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

    // ensuite, je créé un autre observable qui au bout de 10 seconde, va ajouter 1000 au précédent

    timer(10000).subscribe(() => {
      this.obs4$.next(this.obs4$.getValue() + 1000);
    })

    // Mais soyons fifou, on peut créer un autre observable, qui au bout de 15 sec, va ajouter 1000 toutes les 1 secondes ^^
    
    timer(15000).pipe(
      switchMap(() => interval(1000)),
    ).subscribe(() => {
      this.obs4$.next(this.obs4$.getValue() + 1000);
    })

    // Décrivons le process plus haut pour comprendre le switchMap ^^
    // Etape 1 j'attends 15 sec, c'est mon timer de 15 secondes => timer(15000)
    // Etape suivante, je rentre dans un switchMap, un switchMap permet de passer d'un Observable à un autre, dans notre cas, on passe de timer à interval, qui sont tout deux des observables
    // En souscrivant, je soucris donc à l'interval de 1s qui va me permettre d'ajouter 1000 à chaque itération.

    // Nous allons maintenant utiliser des opérateurs fonctionnels, ils n'impacterons pas la valeur mais le nombre d'émissions


    //DistinctUntilChanged pas proc si la valeur émise est différente de la prédédente
    this.obs6$.pipe(
      distinctUntilChanged(),
    ).subscribe(value => console.log("distinctUntilChanged => " + value))

    // On ne prend ici que les valeur Supérieur ou égal à 50
    this.obs6$.pipe(
      filter((value) => value < 50),
    ).subscribe(value => console.log("filter < 50 => " + value))
    
    // On ne prend que deux valeur, et on se désincrit après
    this.obs6$.pipe(
      take(2),
    ).subscribe(value => console.log("take(2) => " + value))
  
    // On attend 200ms et on prend le dernoer évènement émis
    this.obs6$.pipe(
      debounceTime(200),
    ).subscribe(value => console.log("debounceTime(200) => " + value))
  }

  ngOnInit(): void {
    // au moment de l'init, je déclenche mon Behavior Subject avec la valeur 5000
    this.obs4$.next(5000)
    this.obs4$.next(4000)
    this.obs4$.next(2000)
    this.obs4$.next(0)

    let value = 0;
    console.log("Obs6 avec value => " + value);
    this.obs6$.next(value);
    value = 10;
    console.log("Obs6 avec value => " + value);
    this.obs6$.next(value);
    value = 20;
    console.log("Obs6 avec value => " + value);
    this.obs6$.next(value);
    value = 30;
    console.log("Obs6 avec value => " + value);
    this.obs6$.next(value);
    value = 500;
    console.log("Obs6 avec value => " + value);
    this.obs6$.next(value);
    value = 500;
    console.log("Obs6 avec value => " + value);
    this.obs6$.next(value);

    // On attend 2 secondes avant d'émettre une valeur sur l'obs6 ( behaviorSubject )
    timer(2000).subscribe(() => {
      value = 500;
      console.log("Obs6 avec value => " + value);
      this.obs6$.next(value);
    })
    
    
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
