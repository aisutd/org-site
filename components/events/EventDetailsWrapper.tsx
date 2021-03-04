import { Event } from '../../lib/types';

/**
 * Component properties for a EventDetailsBlock.
 */
interface EventDetailsBlockProps {
  event: Event;
}

export default function EventDetailsBlock({ event }: EventDetailsBlockProps) {
  const { title, description } = event;
  return (
    <article className="p-4">
      <div>
        <div>Image</div>
        <div>{title}</div>
      </div>
      <div>
        <div></div>
        <div className="text-lg">
        {description}
        </div>
      </div>
      <div>
        Tags
      </div>
    </article>
    // TODO: Images, other resources below
  );
}