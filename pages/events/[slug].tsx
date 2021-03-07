import { ArrowBack } from '@material-ui/icons';
import NotesIcon from '@material-ui/icons/Notes';
import ScheduleIcon from '@material-ui/icons/Schedule';
import RoomIcon from '@material-ui/icons/Room';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Event } from '../../lib/types';
import { getAllEvents, getEventInfo, getEventLink } from '../api/events';

function shareEvent(eventUrl: string) {
  if (navigator.share) {
    navigator
      .share({
        url: eventUrl,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else if (navigator.clipboard) {
    navigator.clipboard
      .writeText(eventUrl)
      .then(() => console.log('Event URL copied to clipboard'))
      .catch((error) => console.error('Could not copy event URL to clipboard', error));
  }
}

const ONLINE_MAPPINGS = {
  youtube: 'YouTube',
  google_meet: 'Google Meet',
  ms_teams: 'Microsoft Teams',
  virtual: 'Virtual',
};

/**
 * A page showing event details and other information.
 */
export default function EventPage({ event }: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    id,
    title,
    description,
    presenters,
    location,
    detailedLocation,
    joinLink,
    tags,
    startDate,
    endDate,
    lastUpdated,
    supplements,
  } = event;

  const isUpcoming = new Date().getMilliseconds() > new Date(endDate).getMilliseconds();

  const linkText = isUpcoming ? (joinLink ? 'Watch recording' : 'Join event') : 'Get reminder'; // TODO

  const supplementItems = supplements.map((supplement) => {
    const { title, caption, link, image, type } = supplement;
    return (
      <aside key={link} className="pb-4 rounded-md shadow-md bg-white">
        <Image src={image} alt={title} layout="fill" />
        <div className="mx-4">
          <div className="text-lg my-2">{title}</div>
          <div className="text-sm mb-2">{caption}</div>
        </div>
      </aside>
    );
  });

  const eventStart = new Date(startDate).toLocaleString('en-US');
  const eventEnd = new Date(endDate).toLocaleString('en-US');

  const eventLink = getEventLink('aisutd.org', id);

  const locationText = location !== 'physical' ? 'Online' : ONLINE_MAPPINGS[location];

  return (
    <div className="p-8">
      <section className="p-4 mx-auto max-w-4xl">
        <header className="flex">
          <div
            tabIndex={0}
            className="p-2 hover:bg-gray-300 rounded-full focus:bg-gray-400 cursor-pointer"
          >
            <Link href="/events">
              <ArrowBack />
            </Link>
          </div>
          <div className="flex flex-col justify-center flex-1 text-lg font-bold">Back</div>
        </header>
        <div className="text-4xl font-bold my-4">{title}</div>
        {/* Main information */}
        <aside>
          <div className="py-2">
            {/* Linkbox */}
            <button
              className="mx-4 m-2 p-2 rounded-md bg-blue-300 font-bold"
              onClick={() => shareEvent(eventLink)}
            >
              Share Link
            </button>
            {joinLink && (
              <a className="mx-4 m-2 p-2 rounded-md bg-blue-300 font-bold" href={joinLink}>
                {linkText}
              </a>
            )}
          </div>
          <div className="flex">
            <div className="px-4 py-2">
              <ScheduleIcon />
            </div>
            <div className="flex-1 my-2 mr-4">
              {eventStart} - {eventEnd}
            </div>
          </div>
          <div className="flex">
            <div className="px-4 py-2">
              <RoomIcon />
            </div>
            <div className="flex-1 my-2 mr-4">{locationText}</div>
          </div>
          <div className="flex">
            <div className="px-4 py-2">
              <NotesIcon />
            </div>
            <div className="flex-1 my-2 mr-4">{description}</div>
          </div>
        </aside>
      </section>
      <section className="p-4 my-4 mx-auto max-w-4xl">
        <div className="text-3xl font-bold">Supplementary Materials &amp; Resources</div>
        <div className="md:grid md:grid-cols-3">{supplementItems}</div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  if (slug === undefined) {
    return {
      props: {
        event: null,
      },
      redirect: {
        destination: '/events',
        permanent: false,
      },
    };
  }
  const event = getEventInfo(slug, []);

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = getAllEvents(['id']);

  const paths = events.map((event) => {
    return {
      params: {
        slug: event.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
