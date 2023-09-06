export interface IArm {
    id: number,
    position: 'gauche' | 'droite',
    idHand: number
}

export const dataLeg: IArm[] = [{
    id: 1,
    position: 'gauche',
    idHand: 0
}, {
    id: 2,
    position: 'droite',
    idHand: 1
}]