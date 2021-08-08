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
    return <OfficerItem key={officer.name} officer={officer} />;
  });
  return (
    <div className="bg-ais-white font-semibold rounded-xl shadow-lg">
      <div className="pb-8">
        <div className={textColor + ' text-4xl py-8 px-10'}>{team}</div>
        <div className="px-10">
          <div className={'flex flex-wrap flex-grow gap-4 justify-center place-items-center'}>
            {officerCards}
          </div>
        </div>
      </div>
    </div>
  );
}
