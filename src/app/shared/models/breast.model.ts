export interface IBreast {
    id: number,
    position: 'gauche' | 'droite',
    type: string
}

export const dataBreast:IBreast[] = [{
    id: 1,
    position: 'gauche',
    type: 'tombant'
}, {
    id: 2,
    position: 'droite',
    type: 'tombant'
}, {
    id: 3,
    position: 'gauche',
    type: 'cloche'
}, {
    id: 4,
    position: 'droite',
    type: 'cloche'
}, {
    id: 5,
    position: 'gauche',
    type: 'goutte'
}, {
    id: 6,
    position: 'droite',
    type: 'goutte'
}, {
    id: 7,
    position: 'gauche',
    type: 'pectoraux'
}, {
    id: 8,
    position: 'droite',
    type: 'pectoraux'
}]