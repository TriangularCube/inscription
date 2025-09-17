import { ResourceType } from './ResourceTypes.js'

export enum EventType {
  Strategy = 'Strategy',
  Production = 'Production',
  Council = 'Council',
  War = 'War',
  Special = 'Special',
}

export enum EventCard {
  FledglingEmpire = 'FledglingEmpire',
  FirstVentures = 'FirstVentures',
  EchoesOfThePast = 'EchoesOfThePast',
  ConveneTheCouncil = 'ConveneTheCouncil',
  RedefineTradeRoutes = 'RedefineTradeRoutes',
  BorderConflict = 'BorderConflict',
  TowardsANewHome = 'TowardsANewHome',
  AStrongFoundation = 'AStrongFoundation',
  RelicsRediscovered = 'RelicsRediscovered',
  MaximumYield = 'MaximumYield',
  TechnologicalFrontier = 'TechnologicalFrontier',
  BorderDefense = 'BorderDefense',
  PartisanManeuvering = 'PartisanManeuvering',
  WhenDiplomacyFails = 'WhenDiplomacyFails',
  BustlingEconomies = 'BustlingEconomies',
  RightfulClaim = 'RightfulClaim',
  ForbiddenKnowledge = 'ForbiddenKnowledge',
  DesperateMeasures = 'DesperateMeasures',
  IndustrialZeal = 'IndustrialZeal',
  TheLimitsOfDiplomacy = 'TheLimitsOfDiplomacy',
  DivideAndConquer = 'DivideAndConquer',
  GirdedForWar = 'GirdedForWar ',
  MercilessAmbition = 'MercilessAmbition',
  EmpireAscendant = 'EmpireAscendant',
  AThroneForTheTaking = 'AThroneForTheTaking',
}

export const EventCardDeck = {
  Stage1: {
    Blue: [EventCard.FledglingEmpire, EventCard.FirstVentures],
    Black: [EventCard.EchoesOfThePast],
  },
  Stage2: {
    Blue: [
      EventCard.ConveneTheCouncil,
      EventCard.RedefineTradeRoutes,
      EventCard.BorderConflict,
    ],
    Black: [
      EventCard.TowardsANewHome,
      EventCard.AStrongFoundation,
      EventCard.RelicsRediscovered,
    ],
  },
  Stage3: {
    Blue: [
      EventCard.PartisanManeuvering,
      EventCard.WhenDiplomacyFails,
      EventCard.BustlingEconomies,
    ],
    Black: [
      EventCard.MaximumYield,
      EventCard.TechnologicalFrontier,
      EventCard.BorderDefense,
    ],
  },
  Stage4: {
    Blue: [
      EventCard.IndustrialZeal,
      EventCard.TheLimitsOfDiplomacy,
      EventCard.DivideAndConquer,
    ],
    Black: [
      EventCard.RightfulClaim,
      EventCard.ForbiddenKnowledge,
      EventCard.DesperateMeasures,
    ],
  },
  Stage5: {
    Blue: [EventCard.EmpireAscendant, EventCard.AThroneForTheTaking],
    Black: [EventCard.GirdedForWar, EventCard.MercilessAmbition],
  },
}

export const EventCardDescriptions = {
  [EventCard.FledglingEmpire]: {
    name: 'Fledgling Empire',
    type: EventType.Strategy,
    resources: [ResourceType.Influence, ResourceType.Influence],
    colour: 'Blue',
  },
  [EventCard.FirstVentures]: {
    name: 'First Ventures',
    type: EventType.Strategy,
    resources: [
      ResourceType.Material,
      ResourceType.Material,
      ResourceType.Material,
    ],
    colour: 'Blue',
  },
  [EventCard.EchoesOfThePast]: {
    name: 'Echoes of the Past',
    type: EventType.Strategy,
    resources: [
      ResourceType.Influence,
      ResourceType.Material,
      ResourceType.Research,
    ],
    colour: 'Black',
  },
  [EventCard.ConveneTheCouncil]: {
    name: 'Convene The Council',
    type: EventType.Council,
    stage: 2,
    colour: 'Blue',
  },
  [EventCard.RedefineTradeRoutes]: {
    name: 'Redefine Trade Routes',
    type: EventType.Production,
    colour: 'Blue',
  },
  [EventCard.BorderConflict]: {
    name: 'Border Conflict',
    type: EventType.War,
    colour: 'Blue',
  },
  [EventCard.TowardsANewHome]: {
    name: 'Toward a New Home',
    type: EventType.Strategy,
    resources: [
      ResourceType.Material,
      ResourceType.Material,
      ResourceType.Material,
    ],
    colour: 'Black',
  },
  [EventCard.AStrongFoundation]: {
    name: 'A Strong Foundation',
    type: EventType.Strategy,
    resources: [ResourceType.Influence, ResourceType.Influence],
    colour: 'Black',
  },
  [EventCard.RelicsRediscovered]: {
    name: 'Relics Rediscovered',
    type: EventType.Strategy,
    resources: [ResourceType.Research],
    colour: 'Black',
  },
  [EventCard.MaximumYield]: {
    name: 'Maximum Yield',
    type: EventType.Strategy,
    resources: [
      ResourceType.Material,
      ResourceType.Material,
      ResourceType.Material,
    ],
    colour: 'Blue',
  },
  [EventCard.TechnologicalFrontier]: {
    name: 'Technological Frontier',
    type: EventType.Strategy,
    resources: [ResourceType.Research],
    colour: 'Blue',
  },
  [EventCard.BorderDefense]: {
    name: 'Border Defense',
    type: EventType.Strategy,
    resources: [ResourceType.Influence, ResourceType.Influence],
    colour: 'Blue',
  },
  [EventCard.PartisanManeuvering]: {
    name: 'Partisan Maneuvering',
    type: EventType.Council,
    stage: 3,
    colour: 'Black',
  },
  [EventCard.WhenDiplomacyFails]: {
    name: 'When Diplomacy Fails',
    type: EventType.War,
    colour: 'Blue',
  },
  [EventCard.BustlingEconomies]: {
    name: 'Bustling Economies',
    type: EventType.Production,
    colour: 'Blue',
  },
  [EventCard.RightfulClaim]: {
    name: 'Rightful Claim',
    type: EventType.Strategy,
    resources: [ResourceType.Influence, ResourceType.Influence],
    colour: 'Black',
  },
  [EventCard.ForbiddenKnowledge]: {
    name: 'Forbidden Knowledge',
    type: EventType.Strategy,
    resources: [ResourceType.Research],
    colour: 'Black',
  },
  [EventCard.DesperateMeasures]: {
    name: 'Desperate Measures',
    type: EventType.Strategy,
    resources: [
      ResourceType.Material,
      ResourceType.Material,
      ResourceType.Material,
    ],
    colour: 'Black',
  },
  [EventCard.IndustrialZeal]: {
    name: 'Industrial Zeal',
    type: EventType.Production,
    colour: 'Blue',
  },
  [EventCard.TheLimitsOfDiplomacy]: {
    name: 'The Limits of Diplomacy',
    type: EventType.Council,
    colour: 'Blue',
  },
  [EventCard.DivideAndConquer]: {
    name: 'Divide and Conquer',
    type: EventType.War,
    colour: 'Blue',
  },
  [EventCard.GirdedForWar]: {
    name: 'Girded For War',
    type: EventType.Strategy,
    resources: [
      ResourceType.Material,
      ResourceType.Material,
      ResourceType.Material,
    ],
    colour: 'Black',
  },
  [EventCard.MercilessAmbition]: {
    name: 'Merciless Ambition',
    type: EventType.Strategy,
    resources: [ResourceType.Influence, ResourceType.Influence],
    colour: 'Black',
  },
  [EventCard.EmpireAscendant]: {
    name: 'Empire Ascendant',
    type: EventType.Special,
    colour: 'Blue',
  },
  [EventCard.AThroneForTheTaking]: {
    name: 'A Throne For The Taking',
    type: EventType.War,
    colour: 'Blue',
  },
}
