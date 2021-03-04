import Head from 'next/head';
import Link from 'next/link';
import EventItem from '../../components/events/EventItem';
import { Event } from '../../lib/types';
import { getAllEvents } from '../api/events';

interface EventsPageProps {
  events: Event[];
}

/**
 * A page that shows a searchable list of past events.
 */
export default function EventsPage({ events }: EventsPageProps) {
  const featuredEvents: Event[] = events.slice(0, 1);

  const featuredEventCards = featuredEvents.map((event) => {
    const { title, description } = event;
    const eventLink = `/events/${event.id}`;
    return (
      <div className="m-2">
        <div>{title}</div>
        <div>
          <div className="text-subtitle font-bold">Event details</div>
          <div>{description}</div>
        </div>
        <div>
          <Link href={eventLink}>&gt; Learn more</Link>
        </div>
      </div>
    );
  });

  const eventCards = events.map((event) => {
    return (
      <EventItem key={event.id} event={event} />
    );
  });

  return (
    <div>
      <Head>
        <title>
          Artificial Intelligence Society at UTD - Events
      </title>
      </Head>
      <section className="p-8 bg-gray-400">
        {/* Hero */}
        <div className="mx-auto max-w-6xl p-2">
          <div className="rounded-md shadow-md">
            <input type="text" hint="Search for an event" />
          </div>
        </div>
      </section>
      <section className="bg-gray-200 p-8">
        <div className="mx-auto max-w-6xl p-2">

          <div className="text-3xl font-bold">Upcoming events</div>
          <div>
            {featuredEventCards}
          </div>
        </div>
      </section>
      <section className="bg-gray-200 p-8">
        <div className="mx-auto max-w-6xl p-2">
          <div className="text-3xl font-bold">All events</div>
          <div>
            {eventCards}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Fetch event information for the EventsPage.
 */
export async function getStaticProps() {
  const allEvents = getAllEvents(
    //   [
    //   'title',
    //   'date',
    //   'slug',
    //   'author',
    //   'coverImage',
    //   'excerpt',
    // ]
  );

  return {
    props: {
      events: allEvents,
    },
  };
}