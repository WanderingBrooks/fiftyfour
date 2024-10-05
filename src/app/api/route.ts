import getDepartureForFiftyFourOffReimersholme from "@/getDeparturesForFiftyFourOffReimersholme"

export async function GET() {
  const departures = await getDepartureForFiftyFourOffReimersholme();
 
  return Response.json(departures)
}