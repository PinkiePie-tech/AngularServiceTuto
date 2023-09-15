import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent {

  constructor() {
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
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
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
