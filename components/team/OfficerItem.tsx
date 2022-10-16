import { useState } from 'react';
import { Officer } from '../../lib/types';
import { Email, GitHub, LinkedIn, Language, FormatQuote } from '@material-ui/icons';
import Link from 'next/link';

interface OfficerItemProps {
  officer: Officer;
}

function officerImage(officer: Officer) {
  if (officer.image) {
    return (
      <div className="flex justify-center h-52">
        <img src={officer.image} className="rounded-full p-4" />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center h-52">
        <img src="/default_photo.svg" className="rounded-full p-4" />
      </div>
    );
  }
}

function emailLink(officer: Officer) {
  if (officer.email) {
    return (
      <div className="px-2">
        <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <a href={'mailto: ' + officer.email}>
            <Email color="primary" />
          </a>
        </button>
      </div>
    );
  }
}

function githubLink(officer: Officer) {
  if (officer.github) {
    return (
      <div className="px-2">
        <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <a target="_blank" href={'https://github.com/' + officer.github} rel="noreferrer">
            <GitHub color="primary" fontSize="small" />
          </a>
        </button>
      </div>
    );
  }
}

function linkedInLink(officer: Officer) {
  if (officer.linkedInUrl) {
    return (
      <div className="px-2">
        <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <a target="_blank" href={'https://linkedin.com/in/' + officer.linkedInUrl + "/"} rel="noreferrer">
            <LinkedIn color="primary" />
          </a>
        </button>
      </div>
    );
  }
}

function personalLink(officer: Officer) {
  if (officer.personalWeb) {
    return (
      <div className="px-2">
        <button className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <a target="_blank" href={officer.personalWeb} rel="noreferrer">
            <Language color="primary" />
          </a>
        </button>
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
    // eslint-disable-next-line react/prop-types
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
          <div className="bg-ais-light-gray shadow-xl p-4 rounded-xl">{officer.quote}</div>
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
  let directorAtt;
  if (title.includes('Director') || title.includes('President') || title.includes('Founder'))
    directorAtt = ' order-first ';
  else if (title.includes('VP')) directorAtt = ' order-1 ';
  else if (title.includes('Faculty')) directorAtt = ' order-last ';
  else directorAtt = 'order-2 ';
  const officerImg = officerImage(officer);
  const officerEmail = emailLink(officer);
  const officerGitHub = githubLink(officer);
  const officerLinkedIn = linkedInLink(officer);
  const officerPersonal = personalLink(officer);
  const officerQuote = personalQuote(officer);
  return (
    <div
      className={
        directorAtt +
        'h-80 w-64 transition duration-400 hover:shadow-lg hover:bg-ais-blue-gray rounded-xl  s'
      }
    >
      {officerImg}
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
