import { IBreast } from "./breast.model";
import { ISex } from "./sex.model";

export interface IHuman {
  id: number;
  color: string;
  legs: IHumanLeg[];
  arms: IHumanArm[];
  sex: ISex;
  breasts: IBreast[];
}

export interface IHumanLeg {
  id: number;
  position: string;
  foot: IHumanFoot;
}

export interface IHumanFoot {
  id: number;
  fingerNames: string[];
}

export interface IHumanArm {
  position: string;
  hand: IHumanHand;
}

export interface IHumanHand {
  id: number;
  fingerNames: string[];
}
