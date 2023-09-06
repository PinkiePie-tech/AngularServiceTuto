export interface ICorps {
    id: number,
    name: string,
    color: string,
    idBreast: number[],
    idLeg: number[],
    idArm: number[],
    idSexe: number
}

export const dataCorps: ICorps[] = [{
    id: 1,
    name: 'Georgette',
    color: 'purple',
    idBreast: [1, 6],
    idLeg: [1, 2],
    idArm: [1, 2],
    idSexe: 1
}, {
    id: 2,
    name: 'George',
    color: 'yellow',
    idBreast: [5, 2],
    idLeg: [1, 2],
    idArm: [1, 2],
    idSexe: 2
}]