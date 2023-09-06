export interface IFoot {
  id: number;
  position: "gauche" | "droite";
  idFingers: number[];
}

export const dataFoot: IFoot[] = [
  {
    id: 0,
    position: "gauche",
    idFingers: [6, 7, 8, 9, 10],
  },
  {
    id: 1,
    position: "droite",
    idFingers: [6, 7, 8, 9, 10],
  },
];
