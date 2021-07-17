import { Officer } from '../../lib/types';

interface OfficerItemProps {
  officer: Officer;
}

/**
 * An item that showcases an officer
 */
export default function OfficerItem({ officer }: OfficerItemProps) {
  const { name, title } = officer;
  return (
    <div className="bg-blue-700 h-60 w-44">
      <div className="text-xl font-bold">{name}</div>
      <div>
        <div className="text-md">{title}</div>
      </div>
    </div>
  )
}