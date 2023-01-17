export interface Command {
  title: string;
  description: string;
  sections: Section[];
  image?: string;
}

export interface Section {
  title: string;
  value: string;
}

export interface CommandData {
  title: string;
  description: string;
  commands?: Command[];
  sections?: Section[];
  image?: string;
}

export interface MockTrialData {
  title: string;
  colour: number;
  roles: Role[];
  image: string;
}

export interface Role {
  name: string;
  entry: string;
  expected: string;
  description: string;
}