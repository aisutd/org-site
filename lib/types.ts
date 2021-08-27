/**
 * The place where this event is hosted.
 */
export type Location = 'physical' | 'youtube' | 'google_meet' | 'ms_teams' | 'virtual';

/**
 * A SupplementaryMaterial medium.
 */
export type SupplementType = 'video' | 'notebook' | 'article' | 'demo';

/**
 * Event Category i.e What type of event
 */
export type eventCategory =
  | 'social'
  | 'workshop'
  | 'seminar'
  | 'presentation'
  | 'conference'
  | 'other';

/**
 * Additional presentation or reading materials related to an Event.
 */
export interface SupplementaryMaterial {
  title: string;
  caption: string;
  link: string;
  image: string;
  type: SupplementType;
}

export interface PresenterInfo {
  /**
   * The presenter's preferred name.
   */
  name: string;

  /**
   * If this is an active officer/staff, this should be a link to their profile.
   *
   * For guest speakers, this should be a link of their choice, like their website.
   */
  link?: string;
}

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
   * A list of information for presenters
   */
  presenters: PresenterInfo[];

  /**
   * The place where this event will occur.
   */
  location: string;

  /**
   * What type of event it is
   */
  eventType: string;

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
   * The room no. in which the event will take place if its in-person or hybrid
   */
  roomNo?: string;

  /**
   * A link to a sign-up for in-person attendance of hybrid events
   */
  signup?: string;
  /**
   * A direct link to google slides presentation of an event
   */
  slides?: string;

  /**
   * Categorizes used to group this event with other related ones.
   */
  tags: string[];

  /**
   * A flyer/cover image for the event
   */
  image?: string;

  /**
   * The day and time this event begins.
   */
  startDate: string;

  /**
   * The day and time this event ends.
   */
  endDate: string;

  /**
   * A timestamp for when this event's information was last updated.
   */
  lastUpdated: string;

  /**
   * Additional resources for this event.
   */
  supplements: SupplementaryMaterial[];
}

/**
 * Information about an officer.
 */
export interface Officer {
  /**
   * The full, preferred name of this officer.
   */
  name?: string;

  /**
   * @example Technical Coordinator
   */
  title?: string;

  /**
   * The team they are part of
   * @example Finance
   */
  team?: string;

  /**
   * The date this officer joined the organization.
   */
  dateJoined?: string;

  /**
   * The date this officer left the organization.
   */
  dateDeparted?: string;

  /**
   * Officer's AIS email address
   */
  email?: string;

  /**
   * Officer's Github profile if provided
   */
  github?: string;

  /**
   * Officer's LinkedIn profile if provided
   */
  linkedInUrl?: string;

  /**
   * Officer's personal website
   */
  personalWeb?: string;

  /**
   * Officer's personal quote/blurb
   */
  quote?: string;

  /**
   * Link to officer's photo
   */
  image?: string;
}

/**
 * A link to a project demo showcase.
 */
export interface ProjectDemo {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  lastUpdated: string;
}
