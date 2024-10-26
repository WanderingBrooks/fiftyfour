import { DepartureAPIResponse } from '../../types'

const baseURL = 'https://api.resrobot.se/v2.1/departureBoard';
const bergsundsStrandStopId = '740046226';
const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error('No API key provided')
}

const loadDepartures = () => (fetch(
  `${baseURL}?id=${bergsundsStrandStopId}&format=json&accessId=${apiKey}`,
  // Cache on the request to the external API level. Server side components are not cached.
  // instead we cache here to ensure we are always getting the most up to date data when a
  // user reloads the page.
  { next: { revalidate: 60 /* seconds */ } },
).then((res) => res.json()) as Promise<DepartureAPIResponse>);

const getDepartureForFiftyFourOffReimersholme = async() => {
  const departures = await loadDepartures();

  const departuresOfTheFiftyFourLeavingReimersholme = departures.Departure.filter(
    (departure) => 
      // Bus is the 54 and not the 66 which also stops at this stop
      departure.ProductAtStop.displayNumber === '54'
      // Direction can eiter be 1 or 2 and 1 in this case is the direction
      // going to Hornsberg strand
      && departure.directionFlag === '1'
  );

  return departuresOfTheFiftyFourLeavingReimersholme.map(departure => ({ id: departure.JourneyDetailRef.ref, time: departure.time }));
}

export default getDepartureForFiftyFourOffReimersholme;

export async function GET() {
  const departures = await getDepartureForFiftyFourOffReimersholme();
 
  return Response.json(departures)
}