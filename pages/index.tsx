import Head from 'next/head';
import Link from 'next/link';

/**
 * The root page for the organization website.
 *
 * This page contains an overview of the organization and links to our programs
 * and events.
 */
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Artificial Intelligence Society at UTD - Home</title>
      </Head>
      <main>
        <section id="intro" className="bg-ais-black">
          <div className="py-40 px-40">
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
          <div className="py-20 px-40 grid grid-cols-2 gap-12">
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
                <Link href="/projects">{/*'>'*/} See projects</Link>
              </div>
              <div className="text-ais-light-blue font-bold underline pt-2">
                <Link href="/join">{/*'>'*/} Join the team</Link>
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
                <Link href="/join">{/*'>'*/} Learn More</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="callToAction" className="flex flex-col justify-center p-8 min-h-screen">
          <div className="text-center">Some photos of the org</div>
        </section>
        <section id="programs" className="flex flex-col justify-center p-8 min-h-screen">
          <div className="text-center">
            Probably a three-column layout containing workshops, large events like HackAI.
          </div>
        </section>
      </main>
    </div>
  );
}
