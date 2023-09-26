import { Component } from "@angular/core";
import { ArmorService } from "./shared/service/armor.service";
import { WeaponsService } from "./shared/service/weapons.service";
import { MonstersService } from "./shared/service/monsters.service";
import { Observable, combineLatest, map } from "rxjs";
import { IMonster } from "./shared/model/monster.interface";
import { IWeapon } from "./shared/model/weapon.interface";
import { IArmor } from "./shared/model/armor.interface";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.scss"],
})
export class ExerciceComponent {
  public monsters$: Observable<IMonster[]>;
  public weapons$: Observable<IWeapon[]>;
  public armors$: Observable<IArmor[]>;

  public weaponsWeak$: Observable<IWeapon[]>;
  public armorsResist$: Observable<IArmor[]>;

  public formgroup = new FormGroup({
    monster: new FormControl<number | null>(null),
    // weapon: new FormControl<number | undefined>(undefined),
    // armor: new FormControl<number | undefined>(undefined),
  });

  constructor(
    private armorService: ArmorService,
    private weaponService: WeaponsService,
    private monsterService: MonstersService
  ) {
    this.monsters$ = this.monsterService.getMonsters();
    this.weapons$ = this.weaponService.getWeapons();
    this.armors$ = this.armorService.getArmors();

    //////////////

    this.armorsResist$ = combineLatest([
      this.armors$,
      this.monsters$,
      this.formgroup.get("monster")!.valueChanges,
    ]).pipe(
      map(
        ([armors, monsters, monsterSelected]: [
          IArmor[],
          IMonster[],
          number | null
        ]) => {
          let findMonster = monsters.find(
            (monster: IMonster) => monster.id == monsterSelected
          );
          return armors.filter((armor: IArmor) => {
            return findMonster?.elements?.find(
              (weakMon: "fire" | "dragon" | "ice" | "thunder" | "water") => {
                if (armor.resistances[weakMon] > 0) {
                  return true;
                }
                return false;
                // if (armor.resistances.dragon > 0) {
                //   if (weakMon === "dragon") {
                //     return true;
                //   }
                // }
                // if (armor.resistances.fire > 0) {
                //   if (weakMon === "fire") {
                //     return true;
                //   }
                // }
                // if (armor.resistances.ice > 0) {
                // }
                // if (armor.resistances.thunder > 0) {
                // }
                // if (armor.resistances.water > 0) {
                // }
                // return false;
              }
            );
          });
        }
      )
    );
    this.armorsResist$.subscribe(console.log);

    this.weaponsWeak$ = combineLatest([
      this.formgroup.get("monster")!.valueChanges,
      this.monsters$,
      this.weapons$,
    ]).pipe(
      map(
        ([monsterSelected, monsters, weapons]: [
          number | null,
          IMonster[],
          IWeapon[]
        ]) => {
          let findMonster = monsters.find((monster: IMonster) => {
            return monster.id == monsterSelected;
          });

          return weapons.filter((weapon: IWeapon) => {
            return weapon.elements.find(
              (weaknessWeap: {
                type: string;
                damage: number;
                hidden: boolean;
              }) => {
                return findMonster?.weaknesses.find(
                  (weaknessMons: {
                    element: string;
                    stars: number;
                    condition: string;
                  }) => {
                    return weaknessMons.element == weaknessWeap.type;
                  }
                );
              }
            );
          });
        }
      )
    );

    // return monsters
    //   .find((monster: IMonster) => {
    //     return monster.id == monsterSelected;
    //   })
    //   ?.weaknesses.map(
    //     (weaknessMons: {
    //       element: string;
    //       stars: number;
    //       condition: string;
    //     }) => {
    //       return weapons.map((weapon: IWeapon) => {
    //         return weapon.elements.filter(
    //           (weaknessWeap: {
    //             type: string;
    //             damage: number;
    //             hidden: boolean;
    //           }) => {
    //             return weaknessMons.element === weaknessWeap.type;
    //           }
    //         );
    //       });
    //     }
    //   );
    //     }
    //   )
    // );
  } //fin constructor
}

/**
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
 * Journée 4
 * https://mhw-db.com/skills
 * Cette route donne la liste des skills, mettre en place un select pour sélectionner un des skills et proposer les armures associés à ce skill,
 * Pour une fois, les id sont disponibles :D
 *
 * Pour finir, nous allons créer des sets d'armures, pour cela, nous devons sélectionner 5 pièces d'armures, tête, torse, ceinture, etc ...
 * On aura donc 5 select pour les 5 emplacements, chaque select devra être filtré en fonction du type, pour un emplacement tête, n'afficher que les armures tête
 * 
 * Une fois les selects mis en place, nous allons faire un résumé de ce qui a été sélectionné au niveau des skills ainsi que leurs niveaux
 * Les descriptions des skills devront donc être affiché correspondant au niveau
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
