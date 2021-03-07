import Link from 'next/link';

/**
 * The default header for the website.
 */
export default function SiteHeader() {
  return (
    <header className="py-4 bg-blue-400">
      <div className="md:flex mx-auto max-w-6xl">
        <div className="flex-1 text-2xl ml-4 text-center md:text-left font-bold">
          <Link href="/">Artifical Intelligence Society</Link>
        </div>
        <div className="mt-2 ml-2 md:ml-0 md:mt-0 md:mr-4 overflow-x-scroll md:overflow-y-none md:overflow-x-auto">
          <span className="p-2 text-xl font-semibold">
            <Link href="/events">Events</Link>
          </span>
          <span className="p-2 text-xl font-semibold">
            <Link href="/demos">Projects</Link>
          </span>
          <span className="p-2 text-xl font-semibold">
            <Link href="/team">Team</Link>
          </span>
          <span className="p-2 text-xl font-semibold">
            <Link href="/about">About</Link>
          </span>
          <span className="p-2 text-xl font-semibold">
            <Link href="/join">Join</Link>
          </span>
          {/* TODO: Open search modal or something */}
          <span className="p-2 text-xl font-semibold">
            <Link href="">Search</Link>
          </span>
        </div>
      </div>
    </header>
  );
}
