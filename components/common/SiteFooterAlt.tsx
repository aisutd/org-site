import Link from 'next/link';

export default function SiteFooterAlt() {
  return (
    <footer className="bg-ais-black text-white">
      <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl flex justify-around gap-4 p-4 ">
        <div className="grid grid-col-1 grid-flow-row place-items-center py-5">
          <img src="/ais_dark.svg" className="h-20" />
          <div className="py-5">© Copyright 2021 AIS UTD, All Rights Reserved</div>
        </div>
        <div>
          <div className="text-lg font-bold py-5">Sitemap</div>
          <div>
            <div className="block">
              <Link href="/">Home</Link>
            </div>
            <div className="block">
              <Link href="/events">Events</Link>
            </div>
            <div className="block">
              <Link href="/team">Team</Link>
            </div>
            <div className="block">
              <Link href="/about">About</Link>
            </div>
            <div className="block">
              <Link href="/join">Join</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg font-bold py-5">Socials</div>
          <ul>
            <div>
              <div className="">
                <Link href="/dc">Discord</Link>
              </div>
              <div className="">
                <Link href="/fb">Facebook</Link>
              </div>
              <div className="">
                <Link href="/ig">Instagram</Link>
              </div>
              <div className="">
                <Link href="/linkedin">LinkedIn</Link>
              </div>
              <div className="">
                <Link href="/yt">Youtube</Link>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
}
