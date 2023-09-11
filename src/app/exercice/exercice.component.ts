import { Component } from "@angular/core";
import { EssenceService } from "../shared/service/essence.service";
import { MoteurService } from "../shared/service/moteur.service";
import { PneuService } from "../shared/service/pneu.service";
import { SiegeService } from "../shared/service/siege.service";
import { BehaviorSubject, Observable, combineLatest, map } from "rxjs";
import { IEssence } from "../shared/models/essence.model";
import { IMoteur, IMoteurDTO } from "../shared/models/moteur.model";
import { IPneu } from "../shared/models/pneu.model";
import { ISiege } from "../shared/models/siege.model";
import { FormControl, FormGroup } from "@angular/forms";
import { IVoiture, IVoitureDTO } from "../shared/models/voiture.model";
import { VoitureService } from "../shared/service/voiture.service";

@Component({
  selector: "app-exercice",
  templateUrl: "./exercice.component.html",
  styleUrls: ["./exercice.component.scss"],
})
export class ExerciceComponent {
  public essences$: Observable<IEssence[]>;
  public moteurs$: Observable<IMoteurDTO[]>;
  public pneus$: Observable<IPneu[]>;
  public sieges$: Observable<ISiege[]>;
  public marques$: Observable<string[]>;
  public voitureAdded$ = new BehaviorSubject<IVoitureDTO[]>([]);

  public voitures$: Observable<IVoiture[]>;

  public formgroup = new FormGroup({
    id: new FormControl<number>(0),
    model: new FormControl<string>(""),
    marque: new FormControl<string>(""),
    idSiege: new FormControl<number>(0),
    idPneu: new FormControl<number>(0),
    idMoteur: new FormControl<number>(0),
  });

  constructor(
    private essenceService: EssenceService,
    private moteurService: MoteurService,
    private pneuService: PneuService,
    private siegeService: SiegeService,
    private voitureService: VoitureService
  ) {
    this.essences$ = this.essenceService.getEssence();
    this.moteurs$ = this.moteurService.getMoteur();
    this.pneus$ = this.pneuService.getPneu();
    this.sieges$ = this.siegeService.getSiege();
    this.marques$ = this.voitureService.getMarqueVoiture();

    let moteurView$: Observable<IMoteur[]> = combineLatest([
      this.moteurs$,
      this.essences$,
    ]).pipe(
      map(([moteurs, essences]: [IMoteurDTO[], IEssence[]]) => {
        return moteurs.map((moteur: IMoteurDTO) => {
          return {
            id: moteur.id,
            cylindre: moteur.cylindre,
            consommation: moteur.consommation,
            essence: essences.find(
              (essence: IEssence) => essence.id == moteur.typeEssenceId
            ),
          } as IMoteur;
        });
      })
    );

    this.voitures$ = combineLatest([
      this.pneus$,
      moteurView$,
      this.sieges$,
      this.voitureAdded$,
    ]).pipe(
      map(
        ([pneus, moteurs, sieges, voitures]: [
          IPneu[],
          IMoteur[],
          ISiege[],
          IVoitureDTO[]
        ]) => {
          return voitures.map((voiture: IVoitureDTO) => {
            return {
              id: voiture.id,
              marque: voiture.marque,
              model: voiture.model,
              pneu: pneus.find((pneu: IPneu) => pneu.id == voiture.idPneu),
              moteur: moteurs.find(
                (moteur: IMoteur) => moteur.id == voiture.idMoteur
              ),
              siege: sieges.find(
                (siege: ISiege) => siege.id == voiture.idSiege
              ),
            } as IVoiture;
          });
        }
      )
    );
  }

  public voitureAdd() {
    let voitures: IVoitureDTO[] = this.voitureAdded$.getValue();
    voitures.push(this.formgroup.getRawValue() as IVoitureDTO);

    this.voitureAdded$.next(voitures);
    console.log(this.voitureAdded$.getValue());
  }
  /*
   *
   * Enoncé assez simple mais résolution complexe
   * Créons un formulaire pour créer une voiture, aujourd'hui, je ne propose pas d'interface pour une voiture, je te laisse la créé
   *
   * 
   * - Un select contenant la liste des pneus disponible dans data, le libellé sera la taille + le type de pneu, la valeur remontée sera l'id

- Un select contenant la liste des sieges disponible dans data, le libellé sera la matière + le type de siege, la valeur remontée sera l'id

- Un select contenant la liste des moteur disponible dans data, le libellé sera la cylindré, la consommation ainsi que le type d'essence , la valeur remontée sera l'id du moteur

- Une voiture sera composé d'un type de siege, d'un moteur et d'un type de pneu
cette voiture pourra avoir une marque et un nom

- Il faudra créer l'interface pour l'enregistrement côté back, cette interface contiendra des Id et non les termes exactes, du côté de la vue, on aura les informations complète de la voiture

- La liste des voitures pourra être contenu dans un tableau, le beahvior subject n'est pas une obligation
   */
}
