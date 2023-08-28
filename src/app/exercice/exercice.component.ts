import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {

  constructor() {

  }
  
  // Voir la partie service et mettre en place des mocks de donnée, une liste des data est disponible dans le fichier cat
  // une fois les services mise en place, nous allons revenir sur ce composant

  // Etape 1 : Une fois les services mise en place ( tu peux me demander de l'aide, je suis à côté de toi, juste à ta gauche ), créer un select permettant de sélectionner les cats, ce select retournera pour valeur l'id du cat qu'il aura sélectionné

  // Etape 2 : Créer un observable qui, en fonction de la valeur dans le select, retourne le chat qui correspond à cette valeur. afficher le chat dans la partie html

  // Etape 3 : Passer le select en multiple
}
