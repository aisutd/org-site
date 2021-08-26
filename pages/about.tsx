import Head from 'next/head';
import { Officer } from '../lib/types';
import OfficerItem from '../components/team/OfficerItem';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

/**
 * A page showing off the history of the organization and how far we've come.
 */
export default function AboutPage() {
  const founder: Officer = {
    name: 'Brian Hoang',
    title: "Founder (SE '18)",
    linkedInUrl: 'https://www.linkedin.com/in/brianqhoang/',
    image: '/founder.jpeg',
    personalWeb: 'http://brianqhoang.com/',
  };

  return (
    <div>
      <Head>
        <title>Artificial Intelligence Society - About Us</title>
        <meta
          name="description"
          content="A brief history of the Artficial Intelligence Society at UTD and how we've grown over the years."
        />
      </Head>
      <main className="min-h-screen bg-ais-light-gray">
        <section className="p-8 bg-ais-blue-gray">
          {/* Hero */}
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl py-8 px-2">
            <div className="mt-2 mb-8 text-5xl font-bold">About Us</div>
            <div className="text-xl">
              A brief history of the Artficial Intelligence Society at UTD and how we've grown over
              the years.
            </div>
          </div>
        </section>
        <section className="bg-ais-light-gray py-8">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
            <div>
              <div className="text-4xl font-bold">Our Story</div>
              <div className="text-xl py-2 text-justify mt-6">
                Jeff Bezos, the founder and executive chairman of Amazon, stated in May of 2016 that
                society is on the cusp of entering the golden age of artificial intelligence. That,
                over the next two decades, human society and AI will become intertwined in a way
                that would seem like science fiction today. That modern AI tools, such as Alexa, IBM
                Watson, and Google TensorFlow, only scratch the surface of what’s possible.
              </div>
              <div className="text-xl py-2 text-justify">
                A month after Mr. Bezos’ statement, the Artificial Intelligence Society (AIS) was
                born. In fact, our organization began under the general fascination of the impact
                that AI has already made on the world. Whether that be through Netflix’s movie
                recommendations or Facebook’s facial recognition software, it is incredible how
                ubiquitous AI has become in our daily lives. But as of today, many of the
                fascinating aspects of AI are largely unknown to the general public.
              </div>
              <div className="text-xl py-2 font-semibold">We want to change that.</div>
              <div className="text-xl pt-2 italic ">
                Since 2019, AIS has hosted at least 9 workshops, 6 talks, and 3 iterations of
                HackAI, a full day of learning about the field of AI with over 400 participants.
                Regardless of age, major, or occupation, we believe that AI is for everyone, as it
                has become more common in much of our everyday activities, whether it's YouTube
                recommendations or facial recognition. At AIS, we hope to delve into the nuts and
                bolts of artificial intelligence, as well as showcasing its massive potential.
              </div>
            </div>
          </div>
        </section>
        <section className="bg-ais-light-gray py-8">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
            <div className="text-4xl font-bold">Our Goals</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-flow-row text-2xl text-center mt-8">
              <div className="border-4 p-8 rounded-xl transition duration-400 hover:shadow-xl hover:text-white hover:bg-blue-600 border-blue-600  flex items-center justify-around">
                Demystify the field of AI.
              </div>
              <div className="border-4 p-8 rounded-xl transition duration-400 hover:shadow-xl hover:text-white hover:bg-indigo-600 border-indigo-600 flex items-center justify-around">
                Replace your fear with passion, and the complexity with simplicity.
              </div>
            </div>
          </div>
        </section>
        <section className="bg-ais-light-gray py-8">
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl">
            <div className="text-4xl font-bold">Our Founder</div>
            <div className="flex flex-wrap gap-8 items-center mt-8">
              <OfficerItem key={founder.name} officer={founder} />
              <div className="flex md:max-w-3xl gap-2">
                <FormatQuoteIcon className="self-start transform rotate-180" />
                <div className="text-xl text-justify">
                  A month after Mr. Bezos’ statement, the Artificial Intelligence Society (AIS) was
                  born. In fact, our organization began under the general fascination of the impact
                  that AI has already made on the world. Whether that be through Netflix’s movie
                  recommendations or Facebook’s facial recognition software, it is incredible how
                  ubiquitous AI has become in our daily lives. But as of today, many of the
                  fascinating aspects of AI are largely unknown to the general public.
                </div>
                <FormatQuoteIcon className="self-end" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
