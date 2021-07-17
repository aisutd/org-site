import Head from 'next/head';
import OfficerItem from '../components/team/OfficerItem';
import { Officer } from '../lib/types';
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
      <main className="flex flex-col justify-center min-h-screen">
        <OfficerItem officer={test[0]} />
        <div className="text-center font-bold">Coming soon</div>
      </main>
    </div>
  );
}
