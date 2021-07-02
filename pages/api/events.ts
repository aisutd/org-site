import { Event } from '../../lib/types';
import { Coda } from 'coda-js';
import { Description } from '@material-ui/icons';

/**
 * Coda API
 * How to get an API KEY:
 * 1. Go to https://coda.io/account and scroll down to "Coda API Tokens"
 * 2. Generate a new API key WITH RESTRICTIONS of read only access to this doc: https://coda.io/d/Event-Tracking_dluD4Jth4qA/Events_suqfB#All-Events_tuipI/r5
 * 3. Create a file ".env.local" in your project directory
 * 4. Add the following entry: "CODA_API_KEY='{Your API key}'"
 */
const CodaAPI = new Coda(process.env.CODA_API_KEY);

/**
 * List of events
 */
const EVENTS_MAP: { [key: string]: Event } = {};

/**
 * Fetch event information.
 *
 * @param eventId The unique identifier for the event
 */
export const getEventInfo = async (eventId: string, fields?: string[]): Promise<Event> => {
  // TODO: Return actual event info
  await getAllEvents();
  return EVENTS_MAP[eventId];
};

/**
 * Return all past and upcoming events.
 */
export const getAllEvents = async (fields?: string[]): Promise<Event[]> => {
  // If events were updated <1 min ago, return events without updating
  const lastEvents = Object.keys(EVENTS_MAP);
  if (lastEvents.length != 0) {
    const lastUpdate = new Date(EVENTS_MAP[lastEvents[0]]['lastUpdated']);
    const timeNow = new Date();
    if (lastUpdate.getMinutes == timeNow.getMinutes) return Object.values(EVENTS_MAP);
  }
  // If events were updated >1 min ago, get new events from Coda API
  const doc = await CodaAPI.getDoc('luD4Jth4qA'); // Grab Event Tracking Doc from Coda API using the Doc ID at https://coda.io/developers/apis/v1
  const table = await doc.getTable('All Events'); // Grab the actual table from the doc
  const rows = await table.listRows({ useColumnNames: true }); // Grab all the event entries in the doc

  for (let i = 0; i < rows.length; i++) {
    // For each event in the table
    const eventTags: string[] = rows[i].values['Keywords'].split(', ');
    const eventPresenters: { name: string; link: string }[] = [];
    for (const presenterName of rows[i].values['Presenter Names'].split(', ')) {
      eventPresenters.push({
        name: presenterName,
        link: '',
      });
    }
    const eventToAdd: Event = {
      id: rows[i].values['Shortened Event Title'],
      title: rows[i].values['Event Title'],
      description: rows[i].values['Description'],
      presenters: eventPresenters,
      location: rows[i].values['Platform'],
      eventType: rows[i].values['Event Type'],
      joinLink: rows[i].values['Relevant Link'],
      startDate: rows[i].values['Event Date'],
      endDate: rows[i].values['Event End Date'],
      tags: eventTags,
      lastUpdated: new Date().toISOString(),
      supplements: [],
    };
    EVENTS_MAP[eventToAdd['id']] = eventToAdd;
  }
  return Object.values(EVENTS_MAP);
};

/**
 * Get a shareable URL for an event.
 *
 * @param hostname The domain name for the website
 * @param slug The ID of the event
 */
export function getEventLink(hostname: string, slug: string): string {
  return `https://${hostname}/events/${slug}`;
}
