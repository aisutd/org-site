import { Event } from '../../lib/types';
import Link from 'next/link';

interface EventItemProps {
  event: Event;
}

/**
 * An item that displays event details
 */
export default function EventItem({ event }: EventItemProps) {
  const { title, description, startDate } = event;
  const eventLink = `/events/${event.id}`;

  const displayDate = new Date(startDate).toString();
  return (
    <div className="m-2">
      <div className="text-xl font-bold">{title}</div>
      <div>
        <div className="text-lg">{description}</div>
        <Link href={eventLink}>&gt; Learn more</Link>
      </div>
    </div>
  );
}
