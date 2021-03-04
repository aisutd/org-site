import { Event } from '../../lib/types';

interface EventItemProps {
  event: Event;
}

/**
 * An item that displays event details
 */
export default function EventItem({ event }: EventItemProps) {
  const { title, description, startTime } = event;

  const displayDate = (new Date(startTime)).toString();
  return (
    <div className="m-2">
      <div className="text-xl font-bold">{title}</div>
      <div>
        <div className="text-lg">{description}</div>
        <div className="text-md">{displayDate}</div>
      </div>
    </div>
  );
}
