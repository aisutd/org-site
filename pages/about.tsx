import Head from 'next/head';

/**
 * A page showing off the history of the organization and how far we've come.
 */
export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Artificial Intelligence Society - About Us</title>
        <meta
          name="description"
          content="A brief history of the Artficial Intelligence Society at UTD and how we've grown over the years."
        />
      </Head>
      <main className="flex flex-col justify-center min-h-screen">
        <div className="text-center font-bold">Coming soon</div>
      </main>
    </div>
  );
}
