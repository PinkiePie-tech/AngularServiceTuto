import { ICourse } from "../models/course.interface";
import { IDevise } from "../models/devise.interface";

export const dataCourses: ICourse[] = [
  {
    id: 1,
    name: "Saucisse",
    priceEuro: 5,
  },
  {
    id: 2,
    name: "Merguez",
    priceEuro: 2,
  },
  {
    id: 3,
    name: "Chippo",
    priceEuro: 4,
  },
  {
    id: 4,
    name: "Knacki",
    priceEuro: 3,
  },
  {
    id: 5,
    name: "Saucisse blanche",
    priceEuro: 2,
  },
  {
    id: 6,
    name: "Saucisse de toulouse",
    priceEuro: 7,
  },
];

/**
 *   Ici nous avons une table des devise
 * le ratio est par rapport à l'euro
 * 1 euro équivaut à 1 euro
 * 1 euro équivaut à 159.11 yen
 * etc ...
 * */
export const dataDevise: IDevise[] = [
  {
    id: 1,
    name: "Euro",
    symbol: "€",
    ratio: 1,
  },
  {
    id: 2,
    name: "Yen",
    symbol: "¥",
    ratio: 159.11,
  },
  {
    id: 3,
    name: "Dollars",
    symbol: "$",
    ratio: 1.09,
  },
];
