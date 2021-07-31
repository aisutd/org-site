import { Officer } from '../../lib/types';
import OfficerItem from './OfficerItem';

interface TeamProps {
  officers: Officer[];
  team: string;
  color?: string;
}

export default function TeamItems({ officers, team, color }: TeamProps) {
  let textColor = '';
  if (color) {
    textColor = color;
  } else {
    textColor = ' text-ais-light-blue ';
  }
  const officerCards = officers.map((officer) => {
    return (
      <div key={officer.name}>
        <OfficerItem officer={officer} />
      </div>
    );
  });
  return (
    <div className="bg-ais-white font-semibold m-20 rounded-xl shadow-lg">
      <div className="pb-8">
        <div className={textColor + ' text-4xl py-8 px-10'}>{team}</div>
        <div className="grid grid-cols-5 justify-items-center">{officerCards}</div>
      </div>
    </div>
  );
}
