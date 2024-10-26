'use client';

import classes from './departures.module.css'
import useDepartures from './useDepartures';

// Remove the seconds from the departure time
const removeSecondsFromDepartureTime = (timeAsString: string) => timeAsString.slice(0, timeAsString.length - 3)
 
export default function ServerInitialLoad() {
  const { departures, isLoading, error } = useDepartures();

  return (
    <main className={classes.flexContainer}>
      {isLoading && (
        <span>loading...</span>
      )}
      {error && (
        <div>
          <span>Whelp something went wrong. ¯\_(ツ)_/¯</span>
          <span>{error}</span>
        </div>
      )}
      {departures && !error && !isLoading && departures.map(departure => (   
        <h1 key={departure.id}>{removeSecondsFromDepartureTime(departure.time)}</h1>
      ))}
    </main>
  )
}