import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IPanier, IPanierItem } from "../models/panier.interface";

@Injectable({
  providedIn: "root",
})
export class PanierService {
  public panier$ = new BehaviorSubject<IPanier>({ id: 1, products: [] });
  constructor() {}

  public getPanier(): Observable<IPanier> {
    return this.panier$;
  }
  public addPanier(article: IPanierItem) {
    let panier: IPanier = this.panier$.getValue();
    panier.products.push(article);

    this.panier$.next(panier);
  }
  public deleteArticle(articles: IPanierItem) {
    let panier: IPanier = this.panier$.getValue();

    let index = panier.products.findIndex((items: IPanierItem) => {
      return items.idProduct === articles.idProduct;
    });

    panier.products = panier.products.splice(index, 1);

    this.panier$.next(panier);
  }
}
