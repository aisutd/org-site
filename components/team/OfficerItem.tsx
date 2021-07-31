import { Officer } from '../../lib/types';
import { Email, GitHub, LinkedIn, Language } from '@material-ui/icons';
import Link from 'next/link';

interface OfficerItemProps {
  officer: Officer;
}

function emailLink(officer: Officer) {
  if (officer.email) {
    return (
      <Link href={'mailto: ' + officer.email}>
        <a>
          <Email color="primary" />
        </a>
      </Link>
    );
  }
}

function githubLink(officer: Officer) {
  if (officer.github) {
    return (
      <Link href={'https://github.com/' + officer.github}>
        <a target="_blank">
          <GitHub color="primary" fontSize="small" />
        </a>
      </Link>
    );
  }
}

function linkedInLink(officer: Officer) {
  if (officer.linkedInUrl) {
    return (
      <Link href={officer.linkedInUrl}>
        <a target="_blank">
          <LinkedIn color="primary" />
        </a>
      </Link>
    );
  }
}

function personalLink(officer: Officer) {
  if (officer.personalWeb) {
    return (
      <Link href={officer.personalWeb}>
        <a target="_blank">
          <Language color="primary" />
        </a>
      </Link>
    );
  }
}

/**
 * An item that showcases an officer
 */
export default function OfficerItem({ officer }: OfficerItemProps) {
  const { name, title } = officer;
  const imgSrc = '/officers/' + name.replace(' ', '_').toLowerCase() + '.jpg';
  const officerEmail = emailLink(officer);
  const officerGitHub = githubLink(officer);
  const officerLinkedIn = linkedInLink(officer);
  const officerPersonal = personalLink(officer);
  return (
    <div className="bg-ais-white rounded-lg  h-96 w-72">
      <div className="flex justify-center">
        <img src={imgSrc} className="rounded-full p-4" />
      </div>
      <div className="text-2xl font-bold text-center">{name}</div>
      <div className="">
        <div className="text-lg text-center font-light py-2">{title}</div>
      </div>
      <div className="flex justify-center pt-1">
        <div className="px-2">{officerEmail}</div>
        <div className="px-2">{officerGitHub}</div>
        <div className="px-2">{officerLinkedIn}</div>
        <div className="px-2">{officerPersonal}</div>
      </div>
    </div>
  );
}
