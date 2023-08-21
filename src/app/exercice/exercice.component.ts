import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {

  constructor() {

  }

  // Exercice 1 : Créer un input text avec un formControl

  // Exercice 2 : Afficher la valeur a chaque saisie clavier dans le formControl

  // Exercice 3 : Améliorons la saisie, ne provoquons un évènement que toutes les 200 millisecondes
  // Exercice 3.1 : On peut vérifier que si la valeur est la même, on ne réaffiche pas la valeur

  // Exercice 4 : Créer un observable permettant de récupérer la liste des pokemons

  // Exercice 5 : Faire appel à cette observable dans la vue

  // Exercice 6 : Filter la liste en fonction de la valeur saisie  dans l'input
  // Exercice 6.1 : En premier avec un bouton si plus simple
  // Exercice 6.2 : Directement depuis le changement de valeur

  // Exercice 7 : Ajouter  un input en Select, la liste des options sera les types de pokemons

  // Exercice 8 : Filter en fontion du type sélectionné
  // Exercice 8.1 : Filter d'abord uniquement sur le select
  // Exercice 8.2 : Filter sur les deux en même temps si tu te sens chaud patate

  // Exercice 9 : Ajouter un clic sur un élément de la liste, lors de ce clic, appeler le service pour avoir les details sur le pokemon qu'on a sélectionné
  // Exercice 9.1 : Tu peux en première étape juste faire un console log de l'élément que tu as cliqué

  // Exercice 10 : Créer un bouton ajouter dans la liste permettant de rajouter cette élément à la collection
  // Exercice 10.1 : Ce bouton ajoutera un élément dans un tableau non observable 
  // Exercice 10.2 : Ce bouton ajoutera un élément dans un tableau observable (BehaviorSubject)

  // Exercice 11 : Afficher la liste des pokemons rajoutés, avec une input pour pouvoir filtrer, un select par type, un bouton supprimer pour les retirer de la liste

  // Exercice 12 : Si un pokemon est dans la liste des pokemons ajoutés, ne pas l'afficher ^^
}
