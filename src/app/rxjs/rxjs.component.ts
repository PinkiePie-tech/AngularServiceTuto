import { Component } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  combineLatestAll,
  filter,
  interval,
  map,
  of,
  switchMap,
  take,
  tap,
  timer,
} from "rxjs";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.css"],
})
export class RxjsComponent {
  constructor() {
    // Bienvenue dans ce tuto RxJs, nous allons voir aujourd'hui RxJs, étonnant non ?
    // Pour ce faire, pas de front, pas de html, du typescript comme on aime en voir
    // C'est là, la beauté de ce tuto, pas de chichi, que du bon gros code de dev back :D

    // La première étape est simple, créer un observable contenant une valeur et l'affiché dans un console.log().

    // let chat$ = of("chat");
    // chat$.subscribe((value) => console.log(value));

    // // La deuxième étape est moins simple, créer un timer et afficher "coucou" dans un console.log() à la fin de ce timer.

    // let timer$ = timer(10000);
    // timer$.subscribe((time: number) => console.log(time, " : coucou"));

    // La troisième étape est encore moins simple, créer un interval et afficher "j'ai dit x fois "coucou"" dans un console.log(), x étant le nombre de fois que l'interval à été provoqué.

    // let int$: Observable<number> = interval(1000);
    // int$
    //   .pipe(take(10))
    //   .subscribe((num: number) => console.log(`j'ai dit ${num} fois "coucou"`));

    // La quatrième étape est encore encore moins simple,
    //créer un interval et afficher "j'ai dit x fois "coucou""
    // dans un console.log() à la fin de ce timer, x étant le nombre de
    //fois que l'interval à été provoqué et arrêté de l'afficher à partir de 10 itérations.

    // La cinquième étape est encore encore encore moins simple,
    //créer un timer qui au bout de 5s créer un interval et affiche
    // "j'ai dit x fois "coucou"" dans un console.log(), x étant le nombre
    // //de fois que l'interval à été provoqué et arrêté de l'afficher à partir de 10 itérations.

    // let time$: Observable<number> = timer(5000);
    // let interv$: Observable<number> = interval(500);

    // // time$
    // //   .pipe(
    // //     switchMap((num: number) => {
    // //       return interv$;
    // //     }),
    // //     take(10)
    // //   )
    // //   .subscribe((num: number) => console.log("je dis ", num, "coucou"));

    // // La sixième étape est encore encore encore encore moins simple, créer un Observable
    // // contenant la valeur "5" et l'affiché au bout de 5s.

    let chaton$: Observable<string> = of("simba");
    //let interv$: Observable<number> = interval(500);

    // timer(5000)
    //   .pipe(
    //     switchMap((num: number) => {
    //       return chaton$;
    //     })
    //   )
    //   .subscribe((str: string) => console.log(str, "toto"));

    // chaton$
    //   .pipe(
    //     switchMap((num: number) => {
    //       return interval(5000);
    //     })
    //   )
    //   .subscribe((num: number) => console.log("toto", num));

    // La septième étape est encore encore encore encore encore moins simple, créer un
    //BehaviorSubject avec pour valeur par défaut 5, l'affiché, et toutes les 2s, ajouter
    //15 à cette valeur.

    // let bh$ = new BehaviorSubject<number>(5);
    // interval(2000).subscribe((num: number) => {
    //   bh$.next(bh$.getValue() + 15);
    // });
    // bh$.subscribe((num: number) => console.log("toto", num));

    // Bienvenue dans ce tuto RxJs, nous allons voir aujourd'hui RxJs, étonnant non ?
    // Pour ce faire, pas de front, pas de html, du typescript comme on aime en voir
    // C'est là, la beauté de ce tuto, pas de chichi, que du bon gros code de dev back :D

    // La première étape est simple, créer un observable contenant une valeur et l'affiché dans un console.log().

    // La deuxième étape est moins simple, créer un timer et afficher "coucou" dans un console.log() à la fin de ce timer.

    // La troisième étape est encore moins simple, créer un interval et afficher "j'ai dit x fois "coucou"" dans un console.log(), x étant le nombre de fois que l'interval à été provoqué.

    // La quatrième étape est encore encore moins simple, créer un interval et afficher "j'ai dit x fois "coucou"" dans un console.log() à la fin de ce timer, x étant le nombre de fois que l'interval à été provoqué et arrêté de l'afficher à partir de 10 itérations.

    // La cinquième étape est encore encore encore moins simple, créer un timer qui au bout de 5s créer un interval et affiche "j'ai dit x fois "coucou"" dans un console.log(), x étant le nombre de fois que l'interval à été provoqué et arrêté de l'afficher à partir de 10 itérations.

    // La sixième étape est encore encore encore encore moins simple, créer un Observable contenant la valeur "5" et l'affiché au bout de 5s.

    // La septième étape est encore encore encore encore encore moins simple, créer un BehaviorSubject avec pour valeur par défaut 5, l'affiché, et toutes les 2s, ajouter 15 à cette valeur.

    // Passage à un autre type d'exercice

    let obs$ = new BehaviorSubject<number>(0);
    let value$: Observable<IValue[]> = of([
      {
        id: 0,
        name: "Annette",
      },
      {
        id: 1,
        name: "Maurice",
      },
      {
        id: 2,
        name: "Josette",
      },
      {
        id: 3,
        name: "Bernard",
      },
      {
        id: 5,
        name: "Joanne",
      },
      {
        id: 7,
        name: "Charles-henry",
      },
      {
        id: 8,
        name: "Hector",
      },
      {
        id: 11,
        name: "Marcel",
      },
      {
        id: 15,
        name: "Jean-pierre",
      },
    ]).pipe(tap(() => console.log("j'ai été appelé")));

    timer(2000).subscribe(() => obs$.next(8));
    timer(4000).subscribe(() => obs$.next(0));
    timer(3000).subscribe(() => obs$.next(2));
    timer(1000).subscribe(() => obs$.next(1));

    /**
     * Nous avons ici un BehaviorSubject et un source de données, ses variables vont
     *  nous servir pour la suite de nos exercices, nous allons modifier les valeurs dans
     * le BehaviorSubject à plusieurs reprises
     */

    // => Afficher la valeur du BehaviorSubject

    obs$.subscribe((num: number) => console.log(num));

    // => Afficher une liste des noms présent dans value$
    value$.subscribe((val: IValue[]) => {
      console.log(val.map((val: IValue) => val.name));
    });

    // => Créer un interval d'une seconde qui se déclenche après 5 seconde et ensuite,
    // à chaque itération, rajoute la valeur  dans le BehaviorSubject

    timer(5000)
      .pipe(
        switchMap(() => {
          return interval(1000);
        })
      )
      .subscribe((num: number) => {
        obs$.next(num), console.log("next:", num);
      });

    // => Afficher le nom de l'id en fonction de la valeur du BehaviorSubject

    obs$
      .pipe(
        switchMap((num: number) => {
          return value$.pipe(
            map((vals: IValue[]) => {
              return vals.find((val: IValue) => {
                return val.id === num;
              });
            })
          );
        })
      )
      .subscribe((val: IValue | undefined) => console.log(val?.name));

    combineLatest([obs$, value$]).subscribe(
      ([obs, values]: [number, IValue[]]) => {
        console.log(
          values.find((val: IValue) => {
            return val.id === obs;
          })?.name
        );
      }
    );
    // => Créer un évènement toutes les secondes qui, à chaque itération, affiche
    //le nom si il est présent, dans le cas contraire, ne rien afficher

    interval(1000).pipe(
      switchMap((num: number) =>
        value$.pipe(
          filter((vals: IValue[]) => {
            return !!vals.find((val: IValue) => {
              return val.id === num;
            });
          })
        )
      )
    );
  }
}
export interface IValue {
  id: number;
  name: string;
}
