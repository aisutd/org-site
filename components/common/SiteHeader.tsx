import Link from 'next/link';
import { useState, useEffect } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Menu } from '@headlessui/react';

/**
 * The default header for the website.
 */
export default function SiteHeader() {
  return (
    <header className="py-4 bg-ais-light-gray">
      <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
        <div className="flex items-center ">
          <div className="flex-1 text-2xl ml-4 text-center md:text-left font-bold">
            <div className="flex gap-4 items-center">
              <img src="/ais_light.svg" className="h-8" />
              <Link href="/">Artificial Intelligence Society</Link>
            </div>
          </div>
          <div className="hidden xl:flex mt-2 ml-2 md:ml-0 md:mt-0 md:mr-4">
            <span className="p-2 text-xl font-semibold">
              <Link href="/events">Events</Link>
            </span>
            <span className="p-2 text-xl font-semibold">
              <Link href="/projects">Projects</Link>
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
            <span className="flex items-center gap-2 ml-4">
              <Link href="/ig">
                <a>
                  <InstagramIcon />
                </a>
              </Link>
              <Link href="/fb">
                <a>
                  <FacebookIcon />
                </a>
              </Link>
              <Link href="/linkedin">
                <a>
                  <LinkedInIcon />
                </a>
              </Link>
              <Link href="/yt">
                <a>
                  <YouTubeIcon style={{ fontSize: 29 }} />
                </a>
              </Link>
              <Link href="/dc">
                <a>
                  <img src="/discord.svg" className="h-6 text-ais-dark-blue" />
                </a>
              </Link>
            </span>
            {/* TODO: Open search modal or something 
          <span className="p-2 text-xl font-semibold">
            <Link href="">Search</Link>
          </span>
          */}
          </div>
          <div className="xl:hidden flex items-center">
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex w-full items-center gap-2">
                <MenuOpenRoundedIcon style={{ fontSize: 34 }} />
              </Menu.Button>
              <Menu.Items className="origin-top-right absolute right-0 rounded-sm w-40 bg-ais-black shadow-xl text-white -mt-1 text-xl ">
                <Menu.Item>
                  <button className="p-4 block hover:bg-ais-blue-gray hover:text-black w-full">
                    <Link href="/events">Events</Link>
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button className="p-4 block hover:bg-ais-blue-gray hover:text-black w-full">
                    <Link href="/projects">Projects</Link>
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button className="p-4 block hover:bg-ais-blue-gray hover:text-black w-full">
                    <Link href="/team">Team</Link>
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button className="p-4 block hover:bg-ais-blue-gray hover:text-black w-full">
                    <Link href="/about">About</Link>
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button className="p-4 block hover:bg-ais-blue-gray hover:text-black w-full">
                    <Link href="/join">Join</Link>
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <span className="flex items-center justify-center pb-2 gap-2">
                    <Link href="/ig">
                      <a>
                        <InstagramIcon />
                      </a>
                    </Link>
                    <Link href="/fb">
                      <a>
                        <FacebookIcon />
                      </a>
                    </Link>
                    <Link href="/linkedin">
                      <a>
                        <LinkedInIcon />
                      </a>
                    </Link>
                    <Link href="/yt">
                      <a>
                        <YouTubeIcon style={{ fontSize: 29 }} />
                      </a>
                    </Link>
                    <Link href="/dc">
                      <a>
                        <img src="/discord_light.svg" className="h-6 -mb-1 text-ais-dark-blue" />
                      </a>
                    </Link>
                  </span>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
