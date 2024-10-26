import useSWR from 'swr'
import { Departure } from '@/types';

const checkIfListisDepartureList = (list: unknown): list is Departure[] => Array.isArray(list) && list.every(item => item.id && item.time);
 
const fetcher = (url: string) => fetch(url).then(ressponse => ressponse.json())

const useDepartures = () => {
  // Loads data initially but also re-queries the data
  // when the tab is focused
  const { data, error, isLoading } = useSWR('/api', fetcher)

  const isListOfDepartures = checkIfListisDepartureList(data);

  let departures: Departure[] | undefined;

  if (isListOfDepartures) {
    departures = data;
  }

  return {
    error,
    isLoading,
    departures
  }
}

export default useDepartures;