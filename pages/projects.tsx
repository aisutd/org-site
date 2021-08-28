import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getDemos } from './api/projects';
import { ProjectDemo } from '../lib/types';

interface DemoPageProps {
  demos: ProjectDemo[];
}

/**
 * A list of demoable projects.
 */
export default function ProjectsPage({ demos }: DemoPageProps) {
  return (
    <div>
      <Head>
        <title>Projects &ndash; AIS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />s
        <meta
          name="description"
          content="An overview of all our AI/ML projects, including explanations and interactive demos."
        />
      </Head>
      <main className="flex flex-col justify-center min-h-screen">
        <div className="text-center font-bold">Coming soon</div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const demos = getDemos();

  return {
    props: {
      demos,
    },
  };
};
