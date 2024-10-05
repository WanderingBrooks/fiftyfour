'use client';

import { useState, useEffect } from 'react';
import { Departure } from "../../types";
import classes from './clientRefresh.module.css'

// Remove the seconds from the departure time
const removeSecondsFromDepartureTime = (timeAsString: string) => timeAsString.slice(0, timeAsString.length - 3)

export default function ClientRefresh({ initialDepartures }: { initialDepartures: Departure[]}) {
  const [departures, setDepartures] = useState<Departure[]>(initialDepartures);
  
  useEffect(() => {
    const refreshData = async () => {
      const response = await fetch('/api');
      const newDepartures = await response.json();

      setDepartures(newDepartures);
    };

    // Set a 60-second interval to refresh the data
    const invervalId = setInterval(() => {
      refreshData();
    }, 60 * 1000); // 60,000 ms = 60 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(invervalId);
  }, []); // Empty dependency array to run once after component mounts

  return (
    <main className={classes.flexContainer}>
      {departures.map(departure => (   
        <h1 key={departure.id}>{removeSecondsFromDepartureTime(departure.time)}</h1>
      ))}
    </main>
  )
}