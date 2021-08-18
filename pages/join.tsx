import Head from 'next/head';
import Link from 'next/link';

/**
 * The root page for the organization website.
 *
 * This page contains an overview of the organization and links to our programs
 * and events.
 */

export default function JoinPage() {
  return (
    <div>
      <Head>
        <title>Artificial Intelligence Society at UTD - Home</title>
      </Head>
      <main>
        <section id="intro" className="bg-ais-black">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-10 sm:py-20 md:py-30 lg:py-40">
            <div className="text-white text-5xl font-semibold">
              We are the Artificial Intelligence Society.
            </div>
            <div className="text-white text-2xl font-thin py-5">
              Our mission: make AI understandable and accessible to everyone.
            </div>
            <div className="text-white font-bold underline">
              <Link href="/join">Join us.</Link>
            </div>
          </div>
        </section>
        <section id="about" className="bg-ais-blue-gray">
          <div className="mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-20 md:py-40 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
            <div className="">
              <div className="text-4xl font-medium">Projects</div>
              <div className="text-l font-bold py-2">
                AIS is an incubator for cool self-guided AI projects.
              </div>
              <div>Know a bit about the field and want to apply your knowledge?</div>
              <div>
                The Projects Team organizes technical workshops and showcases their projects.
              </div>
              <div className="text-ais-black font-bold underline pt-4">
                {'>'} <Link href="/projects"> See projects</Link>
              </div>
              <div className="text-ais-light-blue font-bold underline pt-2">
                {'>'} <Link href="/join"> Join the team</Link>
              </div>
            </div>
            <div className="">
              <div className="text-4xl font-medium">Mentorship</div>
              <div className="text-l font-bold py-2">
                AIM is our semester-long guided AI mentorship experience.
              </div>
              <div>
                Over the course of a semester, our AI bootcamp will teach you the fundamentals of
                the field and help you apply your skills with a project.
              </div>
              <div>
                Have a project idea? Have motivation? We’ll match you with a mentor who can help.
              </div>
              <div className="text-ais-light-blue font-bold underline pt-4">
                {'>'} <Link href="/join"> Learn More</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="programs" className="">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl bg-transparent">
            <div className="bg-ais-white -my-10 rounded-lg px-10 py-5 shadow-2xl">
              <div className="text-4xl font-medium">Events</div>
              <div className="text-l font-bold py-2">
                AIS hosts many events to expand your knowledge and to keep you connected to the
                field.
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-2">
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-md shadow-xl">
                  <img src="/hackai-3.jpg" className="rounded-t-md" />
                  <div className="text-white text-3xl font-semibold px-4 py-4">HackAI</div>
                  <div className="font-light text-white text-l px-4 ">
                    The largest AI hackathon in North Texas.
                  </div>
                  <div className="underline text-sm text-white px-4 py-2 rounded-b-md">
                    <Link href="https://hackai.org/">Learn More</Link>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-indigo-700 to-indigo-600 rounded-md shadow-xl">
                  <img src="/workshops.jpg" className="rounded-t-md" />
                  <div className="text-white text-3xl font-semibold px-4 py-4">Workshops</div>
                  <div className="font-light text-white text-l px-4 ">
                    Guided talks where we teach you AI fundamentals and more.
                  </div>
                  <div className="underline text-sm text-white px-4 py-2">
                    <Link href="/events">Learn More</Link>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-700 to-purple-600 rounded-md shadow-xl">
                  <img src="/socials.jpg" className="rounded-t-md" />
                  <div className="text-white text-3xl font-semibold px-4 py-4">
                    Socials {'&'} Seminars
                  </div>
                  <div className="font-light text-white text-l px-4 ">
                    Fun times and great discussions with students and faculty.
                  </div>
                  <div className="underline text-sm text-white px-4 py-2">
                    <Link href="/events">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="callToAction" className="flex flex-col justify-center p-8 min-h-screen">
          <div className="text-center">Some photos of the org</div>
        </section>
      </main>
    </div>
  );
}
