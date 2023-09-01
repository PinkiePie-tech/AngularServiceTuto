import { IFigurine } from "../models/figurine.model";

export const dataFigurine: IFigurine[] = [{
    id: 1,
    name: 'Figurine A',
    format: '1/6',
    idMaterial: 1,
    price: {
        value: 1000,
        idDevise: 1
    },
    idCharacter: [1]
}, {
    id: 2,
    name: 'Figurine B',
    format: '1/6',
    idMaterial: 2,
    price: {
        value: 500,
        idDevise: 2
    },
    idCharacter: [2, 3]
}, {
    id: 3,
    name: 'Figurine C',
    format: '1/2',
    idMaterial: 3,
    price: {
        value: 5,
        idDevise: 1
    },
    idCharacter: [1, 2, 3]
}, {
    id: 4,
    name: 'Figurine D',
    format: '1/4',
    idMaterial: 4,
    price: {
        value: 100,
        idDevise: 2
    },
    idCharacter: [3]
}];