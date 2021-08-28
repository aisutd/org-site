import Head from 'next/head';
import OfficerItem from '../components/team/OfficerItem';
import { Officer } from '../lib/types';
import TeamItem from '../components/team/TeamItem';
import { getAllOfficers, getOfficer } from './api/officer';

interface TeamPageProps {
  officers: Officer[];
}

/**
 * A page that displays all officers in the organization.
 */
export default function TeamPage({ officers }: TeamPageProps) {
  const techTeam: Officer[] = [];
  const financeTeam: Officer[] = [];
  const industryTeam: Officer[] = [];
  const marketingTeam: Officer[] = [];
  const operationsTeam: Officer[] = [];
  const projectsTeam: Officer[] = [];
  const AIMTeam: Officer[] = [];
  const execTeam: Officer[] = [];

  for (const off of officers) {
    if (off['team'] == 'Executive Board') execTeam.push(off);
    else if (off['team'] == 'Industry Committee') industryTeam.push(off);
    else if (off['team'] == 'Marketing Committee') marketingTeam.push(off);
    else if (off['team'] == 'Operations Committee') operationsTeam.push(off);
    else if (off['team'] == 'Finance Committee') financeTeam.push(off);
    else if (off['team'] == 'Projects Team') projectsTeam.push(off);
    else if (off['team'] == 'Technology Team') techTeam.push(off);
    else if (off['team'] == 'AIM') AIMTeam.push(off);
  }

  return (
    <div>
      <Head>
        <title>Team &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="The past and present officers of the Artificial Intelligence Society - the people who make this all possible."
        />
      </Head>
      <main className="min-h-screen bg-ais-light-gray">
        <section id="team" className="bg-ais-blue-gray">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-10 md:py-20 ">
            <div className="text-5xl font-semibold">The AIS Team</div>
            <div className="text-2xl font-thin py-5">
              Meet everyone that helps run the Artificial Intelligence Society at UT Dallas{' '}
            </div>
          </div>
        </section>
        <section id="officers">
          <div className="flex flex-grow flex-wrap -mt-10 mx-20 pb-8 gap-8 justify-around">
            <TeamItem officers={execTeam} team={'Executive'} />
            <TeamItem officers={operationsTeam} team={'Operations'} />
            <TeamItem officers={financeTeam} team={'Finance'} />
            <TeamItem officers={techTeam} team={'Technology'} />
            <TeamItem officers={AIMTeam} team={'AIM'} />
            <TeamItem officers={marketingTeam} team={'Marketing'} />
            <TeamItem officers={industryTeam} team={'Industry'} />
            <TeamItem officers={projectsTeam} team={'Projects'} />
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allOfficers = await getAllOfficers();
  //   [
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ]

  return {
    props: {
      officers: allOfficers,
    },
  };
}
