import { FC } from 'react'
import Head from 'next/head'

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='px-4 py-2'>
        <h1 className='text-bold font-medium'>hi</h1>
      </div>
    </div>
  )
}

export default Home
