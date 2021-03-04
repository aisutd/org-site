import Link from 'next/link';

/**
 * The default header for the website.
 */
export default function SiteHeader() {
  return (
    <header className="p-4 bg-blue-400">
      <div className="md:flex mx-auto max-w-6xl">
        <div className="flex-1 text-2xl text-center md:text-left font-bold">
          <Link href="/">Artifical Intelligence Society</Link>
        </div>
        <div className="mt-2 md:mt-0">
          <span className="p-2 text-xl font-semibold">
            <Link href="/events">
              Events
            </Link>
          </span>
          <span className="p-2 text-xl font-semibold">
            <Link href="/team">
              Team
            </Link>
          </span>
          <span className="p-2 text-xl font-semibold">
            <Link href="/about">
              About
            </Link>
          </span>
          <span className="p-2 text-xl font-semibold">
            <Link href="/join">
              Join
            </Link>
          </span>
          {/* TODO: Open search modal or something */}
          <span className="p-2 text-xl font-semibold">
            <Link href="">
              Search
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
}