import Head from 'next/head';

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
        <title>
          Artificial Intelligence Society at UTD - Home
        </title>
      </Head>
      <main>
        <section id="hero" className="flex flex-col justify-center p-8 min-h-screen bg-gray-700">
          <div className="text-center text-white">Cool neural network graphic or interactive thing</div>
        </section>
        <section id="about" className="min-h-screen">
          <div className="p-8 mx-auto max-w-6xl">
            <div className="mt-16 text-5xl font-bold">What we do</div>
          </div>
        </section>
        <section id="callToAction" className="flex flex-col justify-center p-8 min-h-screen">
          <div className="text-center">
            Some photos of the org
          </div>
        </section>
        <section id="programs" className="flex flex-col justify-center p-8 min-h-screen">
          <div className="text-center">
            Probably a three-column layout containing workshops, large events like HackAI.
          </div>
        </section>
      </main>
    </div>
  )
}
