
import getDeparturesForFiftyFourOffReimersholme from '../getDeparturesForFiftyFourOffReimersholme'
import ClientRefresh from './clientRefresh'

// Server side render but don't prerender during build
export const dynamic = 'force-dynamic';
 
export default async function ServerInitialLoad() {
  const departures = await getDeparturesForFiftyFourOffReimersholme();

  return (
    <ClientRefresh initialDepartures={departures} />
  )
}