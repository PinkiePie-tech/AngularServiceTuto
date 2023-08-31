import { Component } from "@angular/core";
import { DeviseService } from "../shared/services/devise.service";
import { FormControl } from "@angular/forms";
import { Observable, combineLatest, map, shareReplay, switchMap } from "rxjs";
import { IDevise } from "../shared/models/devise.interface";
import { ICourse } from "../shared/models/course.interface";
import { CourseService } from "../shared/services/course.services";
import { IView } from "../shared/models/view.interface";
import { IPanier, IPanierItem } from "../shared/models/panier.interface";
import { PanierService } from "../shared/services/panier.service";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.css"],
})
export class ExerciceComponent {
  public fcSelect = new FormControl<number>(0);
  public devises$: Observable<IDevise[]>;
  public courses$: Observable<ICourse[]>;
  public deviseSelected$: Observable<IDevise | undefined>;
  public coursesFilt$: Observable<IView[]>;
  public paniers$: Observable<IPanier>;

  constructor(
    private deviseService: DeviseService,
    private courseService: CourseService,
    private panierService: PanierService
  ) {
    this.devises$ = this.deviseService.getDevises();
    this.courses$ = this.courseService.getCourses();
    this.paniers$ = this.panierService.getPanier();

    this.deviseSelected$ = this.fcSelect.valueChanges.pipe(
      switchMap((id: number | null) => {
        return this.deviseService.getDeviseByID(id);
      }),
      shareReplay()
    );
    // this.coursesFilt$ = this.fcSelect.valueChanges.pipe(
    //   switchMap((idDevise: number) => {
    //     return this.deviseService.getDeviseByID(idDevise);
    //   })
    // );

    this.coursesFilt$ = combineLatest([
      this.deviseSelected$,
      this.courses$,
    ]).pipe(
      map(([selectDevise, listeCourse]: [IDevise | undefined, ICourse[]]) => {
        return listeCourse.map((course: ICourse) => {
          return {
            id: course.id,
            name: course.name,
            priceEuro: course.priceEuro,
            // ...course
            price:
              course.priceEuro *
              (!!selectDevise?.ratio ? selectDevise!.ratio : 1),
          } as IView;
        });
      })
    );
  }

  public addPanier(article: ICourse) {
    this.panierService.addPanier({
      idProduct: article.id,
      nbProduct: 1,
    } as IPanierItem);
  }
  public deletePanier(article: ICourse) {
    this.panierService.deleteArticle({
      idProduct: article.id,
      nbProduct: 1,
    } as IPanierItem);
  }

  /**
   * Pour cette exercice, nous avons juste préparer les fichiers, à toi de construire le reste
   * Nous allons garder le concept d'étape permettant de te guider
   *
   * etape 1: créer un select permettant de choisir les devises
   *
   * etape 2: afficher la liste des produits ( ICourse voir IView )
   * Pour information, IView est une extension de ICourse, IView reprend les mêmes propriétés
   * que ICourse mais ajoute une information supplémentaire
   * On appelle ça un héritage
   *
   * etape 3: lors du changement de devises, actualiser la liste des prix pour correspondre a la
   * devise sélectionnée
   *
   * BONUS si tu vas trop vite, que tu t'ennuies sans ton précieux coloc que tu aimes tant, que tu
   * idolatres !!!
   * etape 4: créer un système de panier, pour ajouter les produits dans un panier, la première
   * étape sera juste de rajouter un seul produit
   *
   * BONUS du BONUS
   * etape 5: pouvoir rajouter un nombre de produits supérieur à 1
   *  */
}
