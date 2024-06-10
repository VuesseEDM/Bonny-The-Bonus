import { Citizen, Startup, Incentive } from "./classes";
import { IStartup, ICitizen, IIncentive } from "./interfaces";

// Creating some startups
const startup1: IStartup = new Startup(
  "EcoCycle",
  "Recycling",
  "Startup focused on recycling materials",
  ["Recycled plastic cups", "Recycled aluminum"],
  ["Recycling collection service", "Environmental consultancy service"]
);

const startup2: IStartup = new Startup(
  "FitApp",
  "Fitness",
  "Startup focused on developing health apps",
  ["Personal training app", "Health monitoring app"],
  ["Nutritional consultancy service"]
);

const startup3: IStartup = new Startup(
  "X",
  "Social",
  "Startup focused on connecting people with a green thumb",
  ["Social media for gardening enthusiasts", "Pedometer ring"],
  ["24/7 assistance service on how to plant a tree in a park without getting arrested"]
);

// Creating some incentives
const incentive1: IIncentive = new Incentive(
  "Green TVB Incentive",
  500,
  ["Startup focused on the environment", "Startup focused on sustainability"],
  "for startups focused on the environment and sustainability"
);

const incentive2: IIncentive = new Incentive(
  "Gym Self Incentive",
  1000,
  ["Startup focused on technology", "Startup focused on innovation"],
  "for startups focused on technology and innovation"
);

// Creating a citizen interested in sports initiatives
const citizen1: ICitizen = new Citizen(
  "Vincent",
  "Sorrentino",
  28,
  ["Soccer", "Volleyball"]
);

const citizen2: ICitizen = new Citizen(
  "Elon",
  "Musk",
  52,
  ["Swimming", "Golf"]
);

// Assigning incentives to startups
incentive1.assignToStartup(startup1);
incentive2.assignToStartup(startup2);

// Citizen participation in activities promoted by startups
citizen1.participateInActivity(startup1);
citizen1.participateInActivity(startup2);
citizen2.participateInActivity(startup3);
