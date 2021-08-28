import Head from 'next/head';
import Link from 'next/link';
import Search from '@material-ui/icons/Search';
import EventItem from '../../components/events/EventItem';
import FeatureEvent from '../../components/events/FeatureEvent';
import { Event } from '../../lib/types';
import { getAllEvents } from '../api/events';
import { GetServerSideProps } from 'next';

interface EventsPageProps {
  events: Event[];
}

/**
 * A page that shows a searchable list of past events.
 */
export default function EventsPage({ events }: EventsPageProps) {
  const futureEvents: Event[] = [];
  const onGoingEvents: Event[] = [];
  const pastEvents: Event[] = [];
  const pastEventsCols = [[], [], []];

  events.forEach(function (eachEvent) {
    const startTime = new Date(eachEvent.startDate);
    const endTime = new Date(eachEvent.endDate);
    const timeNow = new Date();
    if (endTime < timeNow) pastEvents.push(eachEvent);
    else if (timeNow < startTime) futureEvents.push(eachEvent);
    else onGoingEvents.push(eachEvent);
  });

  const pastEventCards = pastEvents.map((event) => {
    return (
      <div key={event.id} className="">
        <FeatureEvent key={event.id} event={event} />
      </div>
    );
  });

  for (let i = 0; i < pastEventCards.length; i++) {
    pastEventsCols[i % 3].push(pastEventCards[i]);
  }
  const futureEventCards = futureEvents.map((event) => {
    return <FeatureEvent key={event.id} event={event} />;
  });

  const onGoingEventCards = onGoingEvents.map((event) => {
    return <FeatureEvent key={event.id} event={event} onGoing={true} />;
  });

  let pastEventsDiv;
  if (pastEvents.length == 0) {
    pastEventsDiv = <div>There are no past events</div>;
  } else {
    pastEventsDiv = (
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-col w-1/3 min-w-full xl:min-w-0">{pastEventsCols[0]}</div>
        <div className="flex flex-col w-1/3 min-w-full xl:min-w-0">{pastEventsCols[1]}</div>
        <div className="flex flex-col w-1/3 min-w-full xl:min-w-0">{pastEventsCols[2]}</div>
      </div>
    );
  }

  let upComingEventDiv;
  if (futureEvents.length == 0) {
    upComingEventDiv = <div>No upcoming events as of yet, Please check back again!</div>;
  } else {
    upComingEventDiv = (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start">
        {futureEventCards}
      </div>
    );
  }

  let onGoingEventDiv;
  if (onGoingEvents.length != 0) {
    onGoingEventDiv = (
      <section className="bg-ais-light-gray py-8">
        <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
          <div className="text-3xl font-bold mb-4">Ongoing Events</div>
          {onGoingEventCards}
        </div>
      </section>
    );
  }

  return (
    <div>
      <Head>
        <title>Artificial Intelligence Society at UTD - Events</title>
      </Head>
      <main className="min-h-screen bg-ais-light-gray">
        <section className="py-8 bg-ais-blue-gray">
          {/* Hero */}
          <div className="mx-auto max-w-sm sm:max-w-md md:max-wgetStaticProps-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-8 px-2">
            <div className="mt-2 mb-8 text-5xl font-bold">Events</div>
            <div className="text-xl">
              We host workshops, seminars, and social events to help students learn about artificial
              intelligence.
            </div>
            <div className="text-xl">See upcoming events and look through event archives here.</div>
            {/* TODO: SEARCH
          
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
          </div> */}
          </div>
        </section>
        {onGoingEventDiv}
        <section className="bg-ais-light-gray py-8">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
            <div className="text-3xl font-bold mb-4">Upcoming Events</div>
            {upComingEventDiv}
          </div>
        </section>
        <section className="bg-ais-light-gray py-8">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
            <div className="text-3xl font-bold mb-4">Event Archive</div>
            {pastEventsDiv}
          </div>
        </section>
      </main>
    </div>
  );
}

/**
 * Fetch event information for the EventsPage.
 */
export async function getServerSideProps() {
  const allEvents = await getAllEvents();
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
