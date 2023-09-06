export interface ISex {
    id: number,
    name: string,
    type: 'homme' | 'femme'
}

export const dataSex: ISex[] = [{
    id: 1,
    name: 'Pistou',
    type: 'homme'
}, {
    id: 2,
    name: 'Clitounette',
    type: 'femme'
}]