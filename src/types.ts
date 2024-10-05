type Departure = {
  // The JourneyDetailRef remapped
  id: string;
  // The time the bus is departing
  time: string;
}

type DepartureAPIResponse = {
  Departure: {
    // When is the bus leaving
    time: string;
    // Direction of the bus
    directionFlag: string;
    // Bus number
    ProductAtStop: { displayNumber: string };
    // Ref of this specific instance of the bus on this route.
    JourneyDetailRef: { ref: string; }
  }[]
}

export type { DepartureAPIResponse, Departure }