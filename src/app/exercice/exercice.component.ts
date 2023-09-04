import { Component } from "@angular/core";
import { FigurineService } from "../shared/service/figurine.service";
import { Observable, combineLatest, map, switchMap } from "rxjs";
import { IFigurine, IFigurineView } from "../shared/models/figurine.model";
import { MaterialService } from "../shared/service/material.service";
import { CharacterService } from "../shared/service/character.service";
import { DeviseService } from "../shared/service/devise.service";
import { IMaterial } from "../shared/models/material.model";
import { ICharacter } from "../shared/models/character.model";
import { IDevise } from "../shared/models/devise.model";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.css"],
})
export class ExerciceComponent {
  public figurines$: Observable<IFigurine[]>;
  public materials$: Observable<IMaterial[]>;
  public characters$: Observable<ICharacter[]>;
  public devises$: Observable<IDevise[]>;
  public fillModel$: Observable<IFigurineView[]>;

  constructor(
    private figurineService: FigurineService,
    private materialService: MaterialService,
    private characterService: CharacterService,
    private deviseService: DeviseService
  ) {
    this.figurines$ = this.figurineService.getFigurine();
    this.materials$ = this.materialService.getMateriel();
    this.characters$ = this.characterService.getCharacter();
    this.devises$ = this.deviseService.getDevise();

    this.fillModel$ = combineLatest([
      this.figurines$,
      this.materials$,
      this.characters$,
      this.devises$,
    ]).pipe(
      map(
        ([figurines, materials, characters, devises]: [
          IFigurine[],
          IMaterial[],
          ICharacter[],
          IDevise[]
        ]) => {
          return figurines.map((figurine: IFigurine) => {
            return {
              id: figurine.id,
              name: figurine.name,
              format: figurine.format,
              material: materials.find(
                (material: IMaterial) => material.id == figurine.idMaterial
              ),
              price: {
                value: figurine.price.value,
                devise: devises.find(
                  (devise: IDevise) => devise.id == figurine.price.idDevise
                ),
              },
              character: characters.filter((character: ICharacter) =>
                figurine.idCharacter.includes(character.id)
              ),
            } as IFigurineView;
          });
        }
      )
    );
  } //fin construct

  /**
   * Figurine est de retour ^^
   * Pour cette exercice, je vais te demander d'afficher les figurines présentes dans le mock figurine.data.ts
   * Je veux voir toutes les informations qui lui sont lié, je ne veux pas voir d'id mais la valeur en face
   *
   *
   * BONUS ( si tu t'en sors bien, c'est jouable niveau temps )
   * Faire deux champs de recherche, un étant un select sur les matériaux, l'autre un input texte de recherche sur le nom de la figurine ou le personnage
   *
   * BONUS du BONUS ( même si tu t'en sors bien, c'est pas jouable aujourd'hui ^^ )
   * Ajouter une nouvelle interface Série, Série sera lié à l'interface character par un id (idSerie), l'affichage doit ensuite afficher la série lié au personnage
   *
   * */
}
