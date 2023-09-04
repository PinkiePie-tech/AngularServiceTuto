import { Component } from "@angular/core";
import { CharacterService } from "../shared/Service/character.service";
import { DeviseService } from "../shared/Service/devise.service";
import { FigurineService } from "../shared/Service/figurine.service";
import { MaterialService } from "../shared/Service/material.service";
import { Observable, combineLatest, map, startWith } from "rxjs";
import { IFigurine, IFigurineView } from "../shared/models/figurine.model";
import { ICharacter } from "../shared/models/character.model";
import { IDevise } from "../shared/models/devise.model";
import { IMaterial } from "../shared/models/material.model";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.css"],
})
export class ExerciceComponent {
  public characters$: Observable<ICharacter[]>;
  public devises$: Observable<IDevise[]>;
  public figurines$: Observable<IFigurine[]>;
  public materials$: Observable<IMaterial[]>;
  public figureDisplay$: Observable<IFigurineView[]>;
  public figureSearch$: Observable<IFigurineView[]>;

  public formgroup = new FormGroup({
    fcSelect: new FormControl<number>(0),
    fcInput: new FormControl<string>(""),
  });

  constructor(
    private characterService: CharacterService,
    private deviseService: DeviseService,
    private figurineService: FigurineService,
    private materialService: MaterialService
  ) {
    this.characters$ = this.characterService.getCharacter();
    this.devises$ = this.deviseService.getDevice();
    this.figurines$ = this.figurineService.getFigurines();
    this.materials$ = this.materialService.getMaterial();

    this.figureDisplay$ = combineLatest(
      this.characters$,
      this.devises$,
      this.figurines$,
      this.materials$
    ).pipe(
      map(
        ([characters, devises, figurines, materials]: [
          ICharacter[],
          IDevise[],
          IFigurine[],
          IMaterial[]
        ]) => {
          return figurines.map((figurine: IFigurine) => {
            return {
              id: figurine.id,
              name: figurine.name,
              format: figurine.format,
              material:
                materials.find(
                  (material: IMaterial) => material.id === figurine.idMaterial
                ) ?? materials[0],
              price: {
                value: figurine.price.value,
                devise:
                  devises.find(
                    (devise: IDevise) => devise.id === figurine.price.idDevise
                  ) ?? devises[0],
              },
              characters: characters.filter((char: ICharacter) => {
                return figurine.idCharacter.find(
                  (id: number) => char.id === id
                );
              }),
            } as IFigurineView;
          });
        }
      )
    );

    this.figureSearch$ = combineLatest(
      this.formgroup
        .get("fcSelect")!
        .valueChanges.pipe(
          startWith(this.formgroup.get("fcSelect")?.getRawValue())
        ),
      this.formgroup
        .get("fcInput")!
        .valueChanges.pipe(
          startWith(this.formgroup.get("fcInput")?.getRawValue())
        ),
      this.figureDisplay$
    ).pipe(
      map(
        ([select, input, listeFig]: [
          number | null,
          string | null,
          IFigurineView[]
        ]) => {
          return listeFig
            .filter((fig: IFigurineView) => {
              if (!!input) {
                return (
                  fig.name
                    .toLocaleLowerCase()
                    .includes(input.toLocaleLowerCase()) ||
                  fig.characters.find((char: ICharacter) => {
                    return char.name
                      .toLocaleLowerCase()
                      .includes(input.toLocaleLowerCase());
                  })
                );
              } else {
                return true;
              }
            })
            .filter((fig: IFigurineView) => {
              if (!!select) {
                return fig.material?.id == select;
              } else {
                return true;
              }
            });
        }
      )
    );
  } // fin construct

  /**
   * Figurine est de retour ^^
   * Pour cette exercice, je vais te demander d'afficher les figurines présentes dans le mock figurine.data.ts
   * Je veux voir toutes les informations qui lui sont lié, je ne veux pas voir d'id mais la valeur en face
   *
   *
   * BONUS ( si tu t'en sors bien, c'est jouable niveau temps )
   * Faire deux champs de recherche, un étant un select sur les matériaux, l'autre un input texte de recherche sur le nom de la figurine ou le personnage
   *
   *
   * BONUS du BONUS ( même si tu t'en sors bien, c'est pas jouable aujourd'hui ^^ )
   * Ajouter une nouvelle interface Série, Série sera lié à l'interface character par un id (idSerie), l'affichage doit ensuite afficher la série lié au personnage
   * */
}
