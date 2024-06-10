import { ICitizen, IStartup, IIncentive, alphanumeric } from "./interfaces";

// CLASSES
export class Startup implements IStartup {
  name: string;
  focusSector: string;
  description: string;
  products: string[];
  services: string[];

  constructor(name: string, focusSector: string, description: string, products: string[], services: string[]) {
    this.name = name;
    this.focusSector = focusSector;
    this.description = description;
    this.products = products;
    this.services = services;
  }

  receiveIncentive(incentive: IIncentive): void {
    console.log(
      `The startup ${this.name}, which focuses on the ${this.focusSector} sector, offers the following products: ${this.products} and the following services: ${this.services} has received: ${incentive.incentiveValue}€`
    );
  }
}

export class Incentive implements IIncentive {
  idCode: alphanumeric;
  incentiveValue: number;
  eligibilityCriteria: string[];
  description: string;

  constructor(idCode: alphanumeric, incentiveValue: number, eligibilityCriteria: string[], description: string) {
    this.idCode = idCode;
    this.incentiveValue = incentiveValue;
    this.eligibilityCriteria = eligibilityCriteria;
    this.description = description;
  }

  assignToStartup(startup: IStartup): void {
    console.log(
      `The incentive ${this.description} worth ${this.incentiveValue}€ has been assigned to the startup ${startup.name} following the eligibility criteria ${this.eligibilityCriteria}`
    );
    startup.receiveIncentive(this);
  }
}

export class Citizen implements ICitizen {
  firstName: string;
  lastName: string;
  age: number;
  sportsInterests: string[];

  constructor(firstName: string, lastName: string, age: number, sportsInterests: string[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sportsInterests = sportsInterests;
  }

  participateInActivity(startup: IStartup): void {
    console.log(`${this.firstName} ${this.lastName} participates in activities promoted by the startup ${startup.name}`);
  }
}
