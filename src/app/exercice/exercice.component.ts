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
   * On veut créer un truc qui fait des recettes de cuisine, je laisse place à ton imagination pour faire le design
   * Pour éviter de partir dans le cosmos, je t'ai mis en place les interfaces, il n'est normalement pas nécessaire d'en faire plus
   * 
   * On doit donc créer un formulaire permettant de saisir des recettes, une liste des ingrédients à été mise en place
   * Dans la saisie d'une recette, nous devons pouvoir lui donner un nom, une description, l'id sera généré automatiquement (auto increment par exemple)
   * Le projet est à faire sur la semaine, il demande pas mal de connaissance vu au préalable, mais permettra de remonter les lacunes qu'ils te restent.
   * Le projet doit être en flex, le tableau se doit d'être propre et aligné, pas besoin de décoration superflu, juste l'essentiel de l'information, présenté proprement
   * Le texte devra aussi correspondre par rapport à ce qu'on affiche, si une recette demande 3 grammes, ajouter le 's'
   * 
   * Deux choix pour ce projet, tenter de le faire sans guideline, ou alors ...
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
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * ...Avec une guideline
   * étape 1 : mettre en place un input text pour le nom de la recette
   * étape 2 : mettre en place un input textarea pour la description
   * étape 3 : mettre en place un champ pour le premier ingrédient, ce champ pourra être un nouveau composant,
   * lors du changement de sa valeur, il renverra l'information à son parent qui updatera ou ajoutera la valeur en fonction de son id.
   * Nous avons normalement déjà pratiquer cet exercice de remonter d'info, si problème il y a, ne faire qu'un seul champ pour continuer
   * --notice-- les 3 étapes au dessus peuvent constituer un composant
   * étape 4 : ajouter un bouton pour ajouter la recette en cours de création, et l'afficher dans un tableau.
   * étape 5 : permettre la modification lors de l'appui sur une des recettes, la recette devra être affiché dans la page courante et
   * écrasera la saisie en cours si c'est le cas
   * étape 6 : ajouter la suppression dans ce tableau, une icone devra permettre de supprimer un élément de la liste
   * */ 
}
