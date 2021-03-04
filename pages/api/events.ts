import { Event } from '../../lib/types';

/**
 * A dummy list of events.
 */
const EVENTS_MAP: { [key: string]: Event } = {
  test1: {
    id: 'test1',
    title: 'What\'s New in AI?',
    description: 'A brief history of the field, some foundational knowledge of the field, and some demos showing off just exactly what AI can do.',
    location: 'youtube',
    joinLink: 'https://youtu.be/R3a_k-9TvNA',
    startDate: '',
    endDate: '',
    tags: ['introduction', 'overview'],
  },
  test2: {
    id: 'test2',
    title: 'Analyzing Sentiment of Movie Reviews',
    description: 'An exploration of sentiment analysis and natural language processing.',
    location: 'youtube',
    joinLink: 'https://youtu.be/iD9fxZUcddc',
    startDate: '2021-02-12T17:30-0600',
    endDate: '2021-02-12T18:45-0600',
    tags: ['natural language processing'],
  },
  test3: {
    id: 'test3',
    title: 'Emotion Recognition in Comics',
    description: 'A brief history of the field, some foundational knowledge of the field, and some demos showing off just exactly what AI can do.',
    location: 'youtube',
    joinLink: 'https://youtu.be/4XAO4IOH5ks',
    startDate: '2021-03-03T17:30-0600',
    endDate: '2021-03-03T18:45-0600',
    tags: ['computer vision', 'natural language processing', 'multimodal model'],
  },
};

const ALL_EVENTS = Object.values(EVENTS_MAP);

/**
 * Fetch event information.
 *
 * @param eventId The unique identifier for the event
 */
export function getEventInfo(eventId: string, fields?: string[]): Event {
  // TODO: Return actual event info
  return EVENTS_MAP[eventId];
}

/**
 * Return all past and upcoming events.
 */
export function getAllEvents(fields?: string[]): Event[] {
  return ALL_EVENTS;
}
