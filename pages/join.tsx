import Head from 'next/head';
import Link from 'next/link';
import Subscribe from '../components/join/Subscribe';

/**
 * The root page for the organization website.
 *
 * This page contains an overview of the organization and links to our programs
 * and events.
 */

export default function JoinPage() {
  const appDivs = (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-2 py-8">
      {' '}
      {/*xl:grid-cols-3*/}
      {/*<div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-md shadow-sm transition duration-400 hover:shadow-xl">
         <img src="/hackai-3.jpg" className="rounded-t-md" /> 
        <div className="text-white text-3xl font-semibold px-4 py-4">Membership</div>
        <div className="font-light text-white text-l px-4 ">
          Apply to be an official AIS member. Perks include ...
        </div>
        <div className="underline text-md text-right text-white px-4 py-2 rounded-b-md">
          <Link href="https://hackai.org/">Apply</Link>
        </div>
      </div>*/}
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 transition duration-400 hover:from-indigo-900 hoverto-indigo-800 rounded-md shadow-md  hover:shadow-2xl">
        {/* <img src="/workshops.jpg" className="rounded-t-md" /> */}
        <div className="text-white text-3xl font-semibold px-4 py-4">Officer Apps</div>
        <div className="font-light text-white text-l px-4 ">
          Apply to the team. Get an opportunity to organize events, network and more.
        </div>
        <div className="underline text-md text-right text-white px-4 py-2">
          <a target="_blank" href="/events" rel="noreferrer">
            Apply
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-700 to-purple-600 transition duration-400 hover:from-purple-900 hover:to-purple-800 rounded-md shadow-sm  hover:shadow-xl">
        {/* <img src="/socials.jpg" className="rounded-t-md" /> */}
        <div className="text-white text-3xl font-semibold px-4 py-4">AI Mentorship</div>
        <div className="font-light text-white text-l px-4 ">
          Apply as a mentee and get a chance to learn foundational concepts in ML and to work on AI
          projects of your interest, guided by experienced mentors.
        </div>
        <div className="underline text-md text-right text-white px-4 py-2">
          <a
            target="_blank"
            href="https://coda.io/form/AIM-Fall-2021-Mentee-Application_dDlWrs9O7kG"
            rel="noreferrer"
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Artificial Intelligence Society at UTD - Join</title>
      </Head>
      <main className="min-h-screen bg-ais-light-gray">
        <section className="py-8 bg-ais-blue-gray">
          {/* Hero */}
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-8 px-2">
            <div className="mt-2 mb-8 text-5xl font-bold">Join Us</div>
            <div className="text-xl">
              We host workshops, seminars, and social events to help students learn about artificial
              intelligence.
            </div>
            <div className="text-xl">
              Consider subscribing to our mailing list or joining the AIS team
            </div>
          </div>
        </section>
        <section className="bg-ais-light-gray py-8">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
            <div className="text-3xl font-bold">Mailing List</div>
            <div className="text-lg pt-2 pb-4">
              Join our mailing list to get email reminders about our upcoming events
            </div>
            {Subscribe()}
          </div>
        </section>
        <section className="bg-ais-light-gray py-8">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-2">
            <div className="text-3xl font-bold">Applications</div>
            <div>{appDivs}</div>
          </div>
        </section>
      </main>
    </div>
  );
}
