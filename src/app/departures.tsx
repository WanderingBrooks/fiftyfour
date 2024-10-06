import getDeparturesForFiftyFourOffReimersholme from '../getDeparturesForFiftyFourOffReimersholme'
import classes from './departures.module.css'

// Server side render but don't prerender during build
export const dynamic = 'force-dynamic';

// Remove the seconds from the departure time
const removeSecondsFromDepartureTime = (timeAsString: string) => timeAsString.slice(0, timeAsString.length - 3)
 
export default async function ServerInitialLoad() {
  const departures = await getDeparturesForFiftyFourOffReimersholme();

  return (
    <main className={classes.flexContainer}>
      {departures.map(departure => (   
        <h1 key={departure.id}>{removeSecondsFromDepartureTime(departure.time)}</h1>
      ))}
    </main>
  )
}