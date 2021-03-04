import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Event } from '../../lib/types';
import { getAllEvents, getEventInfo } from '../api/events';

interface EventPageProps {
  event: Event;
}

export default function EventPage({ event }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, description } = event;
  return (
    <div>
      <section>
        <div className="text-4xl font-bold">{title}</div>
        {/* Main information */}
      </section>
      <section></section>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { eventId } = params;
  const event = getEventInfo(eventId, []);

  if (eventId === undefined) {
    return {
      redirect: {
        destination: '/events',
        permanent: false,
      },
    };
  }

  return {
    props: {
      event,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticProps> {
  const events = getAllEvents(['id']);

  return {
    paths: events.map((event) => {
      return {
        params: {
          slug: event.id,
        },
      };
    }),
    fallback: false,
  };
}
