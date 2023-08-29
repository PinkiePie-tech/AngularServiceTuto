
import { Injectable } from '@angular/core';
import { dataCat } from '../data/cat.data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor() {}

  // Première étape, création d'un mock de service

  public getCats() {
    /** 
     * remplir cette méthode qui va nous retourner une liste de Cat, la liste est stocké aujourd'hui en local,
     * pour simuler une requête réseau, nous devons ajouter un délai de 200 ms à cette requête
     */ 
    return ;
  }

  public getCatById(id: number) {
    /** 
     * remplir cette méthode qui va nous retourner un Cat en fonction d'un ID, la liste est stocké aujourd'hui en local,
     * pour simuler une requête réseau, nous devons ajouter un délai de 100 ms à cette requête
     */ 
    return ;
  }

  public getCatSizes() {
    /** 
     * remplir cette méthode qui va nous retourner une liste de CatSize, la liste est stocké aujourd'hui en local,
     * pour simuler une requête réseau, nous devons ajouter un délai de 200 ms à cette requête
     */ 
  }

  public getCatSizesById(id: number) {
    /** 
     * remplir cette méthode qui va nous retourner un CatSize en fonction d'un ID, la liste est stocké aujourd'hui en local,
     * pour simuler une requête réseau, nous devons ajouter un délai de 100 ms à cette requête
     */ 
    return ;
  }

  public getCategory(): Observable<string[]> {
    return of(['A', 'B', 'C'])
  }
}
