export interface ILeg {
    id: number,
    position: 'gauche' | 'droite',
    idFoot: number
}

export const dataLeg: ILeg[] = [{
    id: 1,
    position: 'gauche',
    idFoot: 0
}, {
    id: 2,
    position: 'droite',
    idFoot: 1
}]