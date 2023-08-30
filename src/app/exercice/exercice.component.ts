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
   * Pour cette exercice, nous avons juste préparer les fichiers, à toi de construire le reste
   * Nous allons garder le concept d'étape permettant de te guider 
   * 
   * etape 1: créer un select permettant de choisir les devises
   * etape 2: afficher la liste des produits ( ICourse voir IView )
   * Pour information, IView est une extension de ICourse, IView reprend les mêmes propriétés que ICourse mais ajoute une information supplémentaire
   * On appelle ça un héritage
   * etape 3: lors du changement de devises, actualiser la liste des prix pour correspondre a la devise sélectionnée
   * 
   * BONUS si tu vas trop vite, que tu t'ennuies sans ton précieux coloc que tu aimes tant, que tu idolatres !!!
   * etape 4: créer un système de panier, pour ajouter les produits dans un panier, la première étape sera juste de rajouter un seul produit
   * 
   * BONUS du BONUS
   * etape 5: pouvoir rajouter un nombre de produits supérieur à 1
   *  */ 
}
