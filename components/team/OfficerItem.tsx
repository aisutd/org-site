import { useState } from 'react';
import { Officer } from '../../lib/types';
import { Email, GitHub, LinkedIn, Language, FormatQuote } from '@material-ui/icons';
import Link from 'next/link';

interface OfficerItemProps {
  officer: Officer;
}

function emailLink(officer: Officer) {
  if (officer.email) {
    return (
      <div className="px-2">
        <Link href={'mailto: ' + officer.email}>
          <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a>
              <Email color="primary" />
            </a>
          </button>
        </Link>
      </div>
    );
  }
}

function githubLink(officer: Officer) {
  if (officer.github) {
    return (
      <div className="px-2">
        <Link href={'https://github.com/' + officer.github}>
          <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a target="_blank">
              <GitHub color="primary" fontSize="small" />
            </a>
          </button>
        </Link>
      </div>
    );
  }
}

function linkedInLink(officer: Officer) {
  if (officer.linkedInUrl) {
    return (
      <div className="px-2">
        <Link href={officer.linkedInUrl}>
          <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a target="_blank">
              <LinkedIn color="primary" />
            </a>
          </button>
        </Link>
      </div>
    );
  }
}

function personalLink(officer: Officer) {
  if (officer.personalWeb) {
    return (
      <div className="px-2">
        <Link href={officer.personalWeb}>
          <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a target="_blank">
              <Language color="primary" />
            </a>
          </button>
        </Link>
      </div>
    );
  }
}

function personalQuote(officer: Officer) {
  if (officer.quote) {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };
    const QuoteIcon = ({ handleMouseOver, handleMouseOut }) => {
      return (
        <div className="px-2">
          <button
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
            className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <FormatQuote color="primary" />
          </button>
        </div>
      );
    };
    const HoverCard = () => {
      return (
        <div className="absolute">
          <div className="bg-ais-white shadow-xl p-4 rounded-xl">{officer.quote}</div>
        </div>
      );
    };
    return (
      <div>
        {/* Hover over this div to hide/show <HoverText /> */}
        <QuoteIcon handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
        {isHovering && <HoverCard />}
      </div>
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
  const officerQuote = personalQuote(officer);
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
        {officerEmail}
        {officerGitHub}
        {officerLinkedIn}
        {officerPersonal}
        {officerQuote}
      </div>
    </div>
  );
}
