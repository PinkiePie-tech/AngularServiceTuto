import { IBreast } from "./breast.model";
import { ISex } from "./sex.model";

export interface IHuman {
    id: number,
    color: string;
    legs: IHumanLeg[];
    arms: IHumanArm[];
    sex: ISex,
    breasts: IBreast[]
}

export interface IHumanLeg {
    position: string,
    foot: IHumanFoot
}

export interface IHumanFoot {
    fingerNames: string[],
}

export interface IHumanArm {
    position: string,
    foot: IHumanHand
}

export interface IHumanHand {
    fingerNames: string[],
}