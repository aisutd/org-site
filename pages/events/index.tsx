import Head from 'next/head';
import Link from 'next/link';
import Search from '@material-ui/icons/Search';
import EventItem from '../../components/events/EventItem';
import { Event } from '../../lib/types';
import { getAllEvents } from '../api/events';
import { GetStaticPaths } from 'next';

interface EventsPageProps {
  events: Event[];
}

/**
 * A page that shows a searchable list of past events.
 */
export default function EventsPage({ events }: EventsPageProps) {
  const featuredEvents: Event[] = events.slice(0, 1);

  const featuredEventCards = featuredEvents.map((event) => {
    const { id, title, description } = event;
    const eventLink = `/events/${event.id}`;
    return (
      <div
        key={id}
        className="inline-block max-w-xl m-2 p-4 bg-white shadow-sm hover:shadow-md focus:shadow-md rounded-md"
      >
        <div className="text-xl font-bold">{title}</div>
        <div>
          <div>{description}</div>
        </div>
        <div>
          <Link href={eventLink}>&gt; Learn more</Link>
        </div>
      </div>
    );
  });

  const eventCards = events.map((event) => {
    return <EventItem key={event.id} event={event} />;
  });

  return (
    <div>
      <Head>
        <title>Artificial Intelligence Society at UTD - Events</title>
      </Head>
      <section className="p-8 bg-gray-400">
        {/* Hero */}
        <div className="mx-auto max-w-3xl p-2">
          <div className="mt-2 mb-8 text-4xl text-center font-bold">AIS Events</div>
          <div className="flex rounded-md shadow-md bg-white">
            <input
              className="inline-block flex-1 p-4 rounded-l-md focus:outline-none"
              type="search"
              name="search"
              placeholder="Search for an event"
            />
            <button className="inline-block mr-4 my-4">
              <Search />
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 p-8">
        <div className="mx-auto max-w-6xl p-2">
          <div className="text-3xl font-bold">Upcoming events</div>
          <div>{featuredEventCards}</div>
        </div>
      </section>
      <section className="bg-gray-200 p-8">
        <div className="mx-auto max-w-6xl p-2">
          <div className="text-3xl font-bold">Event Archive</div>
          <div>{eventCards}</div>
        </div>
      </section>
    </div>
  );
}

/**
 * Fetch event information for the EventsPage.
 */
export async function getStaticProps() {
  const allEvents = getAllEvents();
  //   [
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ]

  return {
    props: {
      events: allEvents,
    },
  };
}
