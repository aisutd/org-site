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
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-2 py-8">
      <div className="bg-gradient-to-r from-purple-700 to-purple-600 transition duration-400 hover:from-purple-900 hover:to-purple-800 rounded-md shadow-sm  hover:shadow-xl">
        <div className="text-white text-3xl font-semibold px-4 py-4">AI Mentorship</div>
        <div className="font-light text-white text-l px-4 ">
          Apply as a mentee and get a chance to learn foundational concepts in ML and to work on AI
          projects of your interest, guided by experienced mentors.
        </div>
        <div className="flex flex-wrap justify-between underline text-md text-white py-2 gap-4 px-4">
          <div className="">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1i4GJzsLaxLYvmLwQsQOwaa5H3KxIqfvprCpW9cSw-JQ/edit?usp=sharing"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
          <div className="">
            <a
              target="_blank"
              href="https://coda.io/form/AIM-Mentee-Application_ddszWO_e7r4"
              rel="noreferrer"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 transition duration-400 hover:from-indigo-900 hoverto-indigo-800 rounded-md shadow-md  hover:shadow-2xl">
        <div className="text-white text-3xl font-semibold px-4 py-4">Membership</div>
        <div className="font-light text-white text-l px-4 ">
          Apply to be an official AIS member. Perks include member-only networks, access to
          one-on-ones, and an invite to join an AIS committee.
        </div>
        <div className="flex flex-wrap justify-between underline text-md text-white py-2 gap-4 px-4">
          <div className="">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1nHS3CIcXueuZG8hyNEQH4hkFkdmpL9WY2Q_RfiOXBO4/edit?usp=sharing"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
          <div className="">
            <a
              target="_blank"
              href="https://coda.io/form/AIS-Membership-Application_dNezXZc0_Z1"
              rel="noreferrer"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 transition duration-400 hover:from-indigo-900 hoverto-indigo-800 rounded-md shadow-md  hover:shadow-2xl">
        <div className="text-white text-3xl font-semibold px-4 py-4">Officer Apps</div>
        <div className="font-light text-white text-l px-4 ">
          Apply to the team. Get an opportunity to organize events, network and more.
        </div>
        <div className="flex flex-wrap justify-between underline text-md text-white py-2 gap-4 px-4">
          <div className="">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1RZRlCcmGRv19IZ5MP1_rltm9TeEZJa20uhEavVNzXDU/edit?usp=sharing"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
          <div className="">
            <a
              target="_blank"
              href="https://coda.io/form/Untitled-Form_d6uISJI-Cx0"
              rel="noreferrer"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Join &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="description"
          content="Get involved in AIS by joining our mailing list and applying to our various programs."
        />
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
