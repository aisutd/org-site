import Head from 'next/head';
import OfficerItem from '../components/team/OfficerItem';
import { Officer } from '../lib/types';
import TeamItem from '../components/team/TeamItem';
import { getAllOfficers, getOfficer } from './api/officer';

/**
 * A page that displays all officers in the organization.
 */
export default function TeamPage() {
  const test: Officer[] = getAllOfficers();
  return (
    <div>
      <Head>
        <title>Artificial Intelligence Society - Team</title>
        <meta
          name="description"
          content="The past and present officers of the Artificial Intelligence Society - the people who make this all possible."
        />
      </Head>
      <main className="flex flex-col justify-center min-h-screen bg-ais-light-gray">
        <section id="team" className="bg-ais-blue-gray">
          <div className="p-10 sm:p-20 md:p-30 lg:p-40">
            <div className="text-5xl font-semibold">The AIS Team</div>
            <div className="text-2xl font-thin py-5">
              Meet everyone that helps run the Artificial Intelligence Society at UT Dallas{' '}
            </div>
          </div>
        </section>
        <section id="officers">
          <div className="-mt-36 ">
            <TeamItem officers={test} team={test[0].team} />
            <TeamItem officers={test} team={"Finance"} />
            <TeamItem officers={test} team={"Industry"} />
            <TeamItem officers={test} team={"AIM"} />
            <TeamItem officers={test} team={"Executive"} />
          </div>
        </section>
      </main>
    </div>
  );
}
