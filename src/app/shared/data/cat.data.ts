import { ICat } from "../models/cat.interface";
import { ICatSize } from "../models/catSize.interface";

export const dataCat: ICat[] = [{
    id: 1,
    name: "American Bobtail à poil long",
    idSize: 1,
    rating: 5,
    category: 'A'
}, {
    id: 2,
    name: "American Bobtail à poil court",
    idSize: 2,
    rating: 5,
    category: 'C'
}, {
    id: 3,
    name: "Maine Coon",
    idSize: 6,
    rating: 50,
    category: 'A'
}, {
    id: 4,
    name: "American Wirehair",
    idSize: 4,
    rating: 1,
    category: 'B'
}, {
    id: 5,
    name: "American Shorthair",
    idSize: 3,
    rating: 2,
    category: 'B'
}, {
    id: 6,
    name: "Burmese Américain",
    idSize: 2,
    rating: 3,
    category: 'C'
}, {
    id: 7,
    name: "American Curl à poil court",
    idSize: 5,
    rating: 1,
    category: 'C'
}, {
    id: 8,
    name: "American Curl à poil long",
    idSize: 7,
    rating: 4,
    category: 'A'
}, {
    id: 9,
    name: "Abyssin",
    idSize: 6,
    rating: 2,
    category: 'B'
}]

export const dataCatSize: ICatSize[] = [{
    id: 1,
    weight: 10,
    width: 100,
    height: 120
}, {
    id: 2,
    weight: 10,
    width: 40,
    height: 35
}, {
    id: 3,
    weight: 10,
    width: 35,
    height: 20
}, {
    id: 4,
    weight: 10,
    width: 13,
    height: 15
}, {
    id: 5,
    weight: 15,
    width: 12,
    height: 120
}, {
    id: 6,
    weight: 101,
    width: 10,
    height: 120
}, {
    id: 7,
    weight: 2000,
    width: 1500,
    height: 12
}, {
    id: 8,
    weight: 5,
    width: 10,
    height: 23
}, {
    id: 9,
    weight: 30,
    width: 150,
    height: 80
}]
