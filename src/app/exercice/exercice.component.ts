import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {

  constructor() {

  }
  
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
   * */ 
}
