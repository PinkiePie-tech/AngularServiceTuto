export interface IHand {
    id: number,
    position: 'gauche' | 'droite',
    idFingers: number[]
}

export const dataLeg: IHand[] = [{
    id: 0,
    position: 'gauche',
    idFingers: [1, 2, 3, 4, 5]
}, {
    id: 1,
    position: 'droite',
    idFingers: [1, 2, 3, 4, 5]
}, {
    id: 2,
    position: 'gauche',
    idFingers: [1, 3]
}, {
    id: 3,
    position: 'droite',
    idFingers: [1, 2, 4, 5]
}]