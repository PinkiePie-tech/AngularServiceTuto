export interface IArtifact {
  id: number;
  name: string;
  slug: string;
  "2_set_bonus": string;
  "4_set_bonus": string;
}

export interface IArtifactForm {
  circlet: string | null;
  gobelet: string | null;
  flower: string | null;
  sand: string | null;
  atq: string | null;
}
