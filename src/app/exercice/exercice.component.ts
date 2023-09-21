import { Component } from "@angular/core";
import { ArmorService } from "./shared/service/armor.service";
import { WeaponsService } from "./shared/service/weapons.service";
import { MonstersService } from "./shared/service/monsters.service";
import { Observable } from "rxjs";
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

  public formgroup = new FormGroup({
    monster: new FormControl<number | undefined>(undefined),
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
