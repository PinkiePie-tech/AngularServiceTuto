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
