export interface IFigurine {
    id: number;
    name: string;
    format: string;
    idMaterial: number;
    price: IPrice;
    idCharacter: number[];
}

export interface IPrice {
    value: number
    idDevise: number;
}