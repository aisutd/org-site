import { Officer } from '../../lib/types';

/**
 * A dummy list of events.
 */
const OFFICERS_MAP: { [key: string]: Officer } = {
  'Kumail Bukhari': {
    name: 'Kumail Bukhari',
    title: 'Technology Director',
    team: 'Technology',
    email: 'kumail.bukhari@aisociety.io',
    github: 'KumailB',
    linkedInUrl: 'https://www.linkedin.com/in/kumail-bu/',
    personalWeb: 'https://kumailb.github.io',
    dateJoined: new Date('2021-05-21').toISOString(),
  },
  'Kumail Bukhari1': {
    name: 'Kumail Bukhari',
    title: 'Technology Director',
    dateJoined: new Date('2021-05-21').toISOString(),
  },
  'Kumail Bukhari2': {
    name: 'Kumail Bukhari',
    title: 'Technology Director',
    dateJoined: new Date('2021-05-21').toISOString(),
  },
  'Kumail Bukhari3': {
    name: 'Kumail Bukhari',
    title: 'Technology Director',
    dateJoined: new Date('2021-05-21').toISOString(),
  },
  'Kumail Bukhari4': {
    name: 'Kumail Bukhari',
    title: 'Technology Director',
    dateJoined: new Date('2021-05-21').toISOString(),
  },
};

const ALL_OFFICERS = Object.values(OFFICERS_MAP);

/**
 * Fetch event information.
 *
 * @param officerId The unique identifier for the event
 */
export function getOfficer(officerId: string, fields?: string[]): Officer {
  // TODO: Return actual event info
  return ALL_OFFICERS[officerId];
}

/**
 * Return all past and upcoming events.
 */
export function getAllOfficers(fields?: string[]): Officer[] {
  return ALL_OFFICERS;
}
