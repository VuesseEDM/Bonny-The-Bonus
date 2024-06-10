export type alphanumeric = string | number;

// INTERFACES
export interface IStartup {
  name: string;
  focusSector: string;
  description: string;
  products: string[];
  services: string[];
  receiveIncentive(incentive: IIncentive): void; 
}

export interface IIncentive {
  idCode: alphanumeric;
  incentiveValue: number;
  eligibilityCriteria: string[];
  description: string;
  assignToStartup(startup: IStartup): void;
}

export interface ICitizen {
  firstName: string;
  lastName: string;
  age: number;
  sportsInterests: string[];
  participateInActivity(startup: IStartup): void;
}
