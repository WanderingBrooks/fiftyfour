
import getDeparturesForFiftyFourOffReimersholme from '../getDeparturesForFiftyFourOffReimersholme'
import ClientRefresh from './clientRefresh'

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;
 
export default async function ServerInitialLoad() {
  const departures = await getDeparturesForFiftyFourOffReimersholme();

  return (
    <ClientRefresh initialDepartures={departures} />
  )
}