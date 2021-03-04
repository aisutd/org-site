/**
 * The place where this event is hosted.
 */
export type Location = 'physical' | 'youtube' | 'google_meet' | 'ms_teams' | 'virtual';

/**
 * Information for a live event.
 */
export interface Event {
  /**
   * A unique identifier for this event
   */
  id: string;

  /**
   * The name of this event.
   */
  title: string;

  /**
   * A long-form description of this event.
   */
  description: string;

  /**
   * The 
   */
  location: Location;

  /**
   * If location is 'physical', then this will be the room this event will be
   * hosted, or the building/address if that is unavailable.
   */
  detailedLocation?: string;

  /**
   * A direct link to the meeting or event if location is not 'physical'
   */
  joinLink?: string;

  /**
   * Categorizes used to group this event with other related ones.
   */
  tags: string[];

  /**
   * The day and time this event begins.
   */
  startDate: string;

  /**
   * The day and time this event ends.
   */
  endDate: string;
}

/**
 * Information about an officer.
 */
interface Officer {
  /**
   * The full, preferred name of this officer.
   */
  name: string;

  /**
   * @example Technical Coordinator
   */
  title: string;

  /**
   * The date this officer joined the organization.
   */
  dateJoined: string;

  /**
   * The date this officer left the organization.
   */
  dateDeparted?: string;
}
