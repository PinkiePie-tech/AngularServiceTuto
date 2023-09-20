import { Component } from "@angular/core";
import { CharacterService } from "./shared/service/character.service";
import { WeaponService } from "./shared/service/weapon.service";
import { ArtifactService } from "./shared/service/artifact.service";
import { Observable, combineLatest, map, switchMap } from "rxjs";
import {
  ICharacter,
  ICharacterArtifacts,
  ICharacterDTO,
} from "./shared/model/character.interface";
import { ICharByWeapon, IWeapon } from "./shared/model/weapon.interface";
import { IArtifact, IArtifactForm } from "./shared/model/artifact.interface";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.scss"],
})
export class ExerciceComponent {
  public formgroup = new FormGroup({
    character: new FormControl<string | null>(null, Validators.required),
    weapon: new FormControl<number | undefined>({
      value: undefined,
      disabled: true,
    }),
  });

  public formArtifacts = new FormGroup({
    circlet: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
    gobelet: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
    flower: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
    sand: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
    atq: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
  });

  public characters$: Observable<ICharacterDTO[]>;
  public weapons$: Observable<IWeapon[]>;
  public artifacts$: Observable<IArtifact[]>;

  public charByDob$: Observable<ICharacterDTO[]>;
  public charByWeapon$: Observable<ICharByWeapon[]>;
  public weaponByChar$: Observable<IWeapon[]>;
  public artByChar$: Observable<ICharacterArtifacts[]>;
  public bonusArt$: Observable<IArtifact[]>;
  //public artSelected$: Observable<IArtifactForm>;

  public id: number = 0;

  constructor(
    private charService: CharacterService,
    private weaponService: WeaponService,
    private artService: ArtifactService
  ) {
    this.characters$ = this.charService.getCharacters();
    this.weapons$ = this.weaponService.getWeapons();
    this.artifacts$ = this.artService.getArtifacts();

    let toto: any = {};
    let key = "name";

    //toto["primary"] = true;
    toto.primary = true;
    toto["id"] = 2;
    toto.id = 2;
    toto[key] = 50;
    toto["1"] = 10;

    console.log(toto[1]);
    // => enable/disable champs en fonction du character
    this.formgroup
      .get("character")
      ?.valueChanges.pipe(
        map((id: string | null) => {
          console.log(id == "null");

          if (id == "null") {
            return false;
          }
          return true;
        })
      )
      .subscribe((exist: boolean) => {
        console.log("sub: ", exist);

        if (exist) {
          this.formgroup.get("weapon")?.enable();
          this.formArtifacts?.enable();
        } else {
          this.formgroup.get("weapon")?.disable();
          this.formArtifacts?.disable();
        }
      });

    this.charByDob$ = this.characters$.pipe(
      map((char: ICharacterDTO[]) => {
        return char.sort((a, b) =>
          this.convertDate(a.birthday) > this.convertDate(b.birthday) ? 1 : -1
        );
      })
    );
    this.charByDob$.subscribe((char: ICharacterDTO[]) =>
      console.log("char by DoB: ", char)
    );

    this.weaponByChar$ = combineLatest([
      this.weapons$,
      this.characters$,
      this.formgroup.get("character")!.valueChanges,
    ]).pipe(
      map(
        ([weapons, characters, idChar]: [
          IWeapon[],
          ICharacterDTO[],
          string | null
        ]) => {
          let typeWeap: string | undefined = characters.find(
            (char: ICharacterDTO) => {
              return idChar == char.id.toString();
            }
          )?.weapon;

          return weapons.filter((weap: IWeapon) => {
            return weap.type === typeWeap;
          });
        }
      )
    );

    this.charByWeapon$ = this.weaponService.getWeapons().pipe(
      switchMap((weapons: IWeapon[]) => {
        return this.characters$.pipe(
          map((chars: ICharacterDTO[]) => {
            return weapons.map((weap: IWeapon) => {
              return {
                id: this.id + 1,
                char: chars.filter((char: ICharacterDTO) => {
                  return weap.type === char.weapon;
                }),
                weap: weap,
              } as ICharByWeapon;
            });
          })
        );
      })
    );
    this.charByWeapon$.subscribe((weap: ICharByWeapon[]) =>
      console.log("weapons by char: ", weap)
    );

    this.artByChar$ = this.characters$.pipe(
      switchMap((chars: ICharacterDTO[]) => {
        return this.artifacts$.pipe(
          map((arts: IArtifact[]) => {
            return chars.map((char: ICharacterDTO) => {
              return {
                ...char,
                artifacts: arts.filter((art: IArtifact) =>
                  art["2_set_bonus"]
                    .toLocaleLowerCase()
                    .includes(char.vision.toLocaleLowerCase())
                ),
              } as ICharacterArtifacts;
            });
          })
        );
      })
    );
    this.artByChar$.subscribe((char: ICharacterDTO[]) =>
      console.log("artifacts by Char", char)
    );

    /// récupérer les arts selected en un tableau.
    // parcourir tous les elems du tab
    // si 2x doublon alors bonus 2, si 4 alors bonus 4

    this.bonusArt$ = combineLatest([
      this.formArtifacts.valueChanges,
      this.artifacts$,
    ]).pipe(
      map(([form, artifacts]: [Partial<IArtifactForm>, IArtifact[]]) => {
        let tabArt: (string | null | undefined)[] = [
          form.atq,
          form.circlet,
          form.flower,
          form.gobelet,
          form.sand,
        ];

        // return artifacts.map((art: IArtifact) => {
        let double: any = {};
        tabArt.forEach((artifact: string | null | undefined) => {
          if (!!artifact) {
            if (!double[artifact]) {
              double[artifact] = 1;
            } else {
              double[artifact]++;
            }
          }
        });
        console.log(double);

        return double;
        // });
      })
    );
    this.bonusArt$.subscribe();

    // console.log("convert : ", this.convertDate("Feb 2th"));
  } //fin construct

  public convertDate(date: string) {
    let monthsList: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let all = date.split(" ");

    let month: string = (
      monthsList.findIndex((month: string) => {
        return month.includes(all[0]);
      }) + 1
    ).toString();

    let day: string = all[1].slice(0, all[1].length - 2);

    if (+day < 10) {
      day = "0" + day;
    }

    if (+month < 10) {
      month = "0" + month;
    }

    return month + day;
    //je suis obligé de retourné qqch pour que la méthode fonctionne?
  }

  /**
   * https://genshinlist.com/api/characters
   * https://genshinlist.com/api/weapons
   * https://genshinlist.com/api/artifacts
   *
   * Voici 3 Api spécial genshin ^^ clairement pas à jour mais j'étais parti sur autre chose mais blizzard aime pas ^^ du coup, model, service, etc
   * Le but final est d'afficher les personnages sur une page html, avec les armes qui sont possible pour lui en fonction de son type, et les artefacts lié à son type ( même si ça sera pas le cas dans le jeu effectivement)
   * On aura donc des models lié à la récupération des informations, en gros une DTO
   * Et on aura un model pour la vue html, car la présentation sera pas la même
   * La difficulté sera surtout dans la liaison des données, ça va te demander de transformer de la donnée, de faire des recherches, et plein de truc fun pour réaliser ça
   *
   * Etape 1, récupérer les personnages et les triés par leur date de naissance ^^ sachant que ce n'est pas un format date, bon courage :D (tips présent à la fin)
   * Etape 2, récupérer la liste des armes, il serait intéressant de la combiner avec les personnages et le type d'arme qu'il accepte, ce pauvre Jean voudrait pas porter une énorme claymore :D
   * Etape 3, récupérer la liste des artefacts, les artefacts seront lié au personnage par leur type, un personnage anemo aura un bonus anemo, feu avec feu, etc ...
   *
   * Journée 2
   * Etape 1 sur 1, j'aimerai pouvoir réaliser  la création d'un build pour un personnage, pour l'instant, on ignore l'étape d'enregistrement, et on se concentre sur la saisie
   * Pour saisir un build, je dois choisir le personnage en premier abord, si pas de personnage sélectionné, alors les armes ainsi que les artefacts seront grisés ( disabled )
   * Lors du choix du personnage, les champs armes et artefacts vont se débloquer
   * Pour le champs armes, la liste des choix devra correspondre aux personnage, par exemple, si je sélectionne Jean, alors j'aurai que des épées qui me seront proposées
   * Pour les champs Artefacts, ils seront au nombre de 5, en fonction de la sélection, les bonus devront être affichés,
   * - si je prend par exemple 2 pièces d'un set et 3 pièces d'un autre, 2 bonus s'afficheront
   * - si je prend par exemple 4 pièces d'un set et 1 pièces d'un autre, 2 bonus s'afficheront
   * - si je prend par exemple 2 pièces d'un set, 2 pièces d'un autre, et encore une pièce d'un autre, 2 bonus s'afficheront
   *
   *
   * Journée 3
   * https://mhw-db.com/fr/armor
   * https://mhw-db.com/fr/monsters
   * https://mhw-db.com/fr/weapons
   *
   * Nouvelle API pour plus de fun ^^
   * Parlons Monster Hunter, et faisons un travail utile ... sur MH World, pas trouvé pour "now"
   * Du coup on a une liste de monstre, une liste d'armure, et une liste d'arme
   * Donc pour un monstre, une liste des armes pour lui défoncer sa gueule
   * Donc pour un monstre, une liste des armures pour ne pas se faire défoncer sa gueule
   * Le concept, une liste de monstre, on en sélectionne un, et quand c'est le cas, on affiche les armes contre laquelle le monstre a des faiblesses, et l'armure pour résister à l'élément
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   * Tips étape 1 : il faut transformer la donnée de la date de naissance en faisant des correspondances ^^
   * Sep => 09, viré les 'th', 'st', en gros créé une méthode pour les transformer ^^
   */
}
