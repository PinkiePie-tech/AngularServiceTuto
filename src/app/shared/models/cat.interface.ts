import { ICatSize } from "./catSize.interface";

export interface ICat {
  id: number;
  name: string;
  idSize: number;
  size?: ICatSize;
  rating: number;
  category: "A" | "B" | "C";
}
