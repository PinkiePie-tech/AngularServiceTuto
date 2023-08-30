export interface IPanier {
    id: number,
    products: IPanierItem[]
}

export interface IPanierItem {    
    nbProduct: number,
    idProduct: number
}