"use client";

import AppCard from '@/components/AppCard';
import { NextApp, nextApps } from '../utils/app-data';
import { useState } from 'react';

export default function Home() {
  const [seeMore, setSeeMore] = useState(false);
  const className = 'font-bold cursor-pointer text-blue-700';

  return (
    <div className="pt-16 min-h-full flex flex-col items-center justify-start text-black bg-gradient-to-b from-white to-green-200">
      <h1 className="text-9xl mb-2 font-satoshi font-bold tracking-wide flex flex-row items-center w-full justify-center flex-wrap"><span className='text-green-500'>Up</span> NexT</h1>

      {
        seeMore ?
          <h2 className="text-md pt-8 w-[46%]">
            This is where I bring ideas to life, crafting interactive and dynamic applications using React and the power of Next.js. Explore my portfolio to discover a world of engaging interfaces, seamless user experiences, and innovative solutions built with these cutting-edge technologies. <span className={className} onClick={() => setSeeMore(false)}>see less</span>
          </h2> :
          <h2 className="text-md pt-8 w-[46%]">
            This is where I bring ideas to life, crafting interactive and dynamic applications using React and the power of Next.js... <span className={className} onClick={() => setSeeMore(true)}>see more</span>
          </h2>
      }

      <div className={`w-auto h-auto flex flex-col items-center justify-start gap-4 p-4 py-6`}>
        <div className='w-[75%] bg-green-500 h-1 rounded-3xl' />
        {/* border-[1px] border-green-500 rounded-lg */}
        <label className='font-bold underline underline-offset-8 mt-4'>NEXT Applications</label>
        <div className='w-auto h-auto flex flex-row flex-wrap items-start justify-evenly gap-4 p-4'>
          {nextApps.map((app: NextApp) => <AppCard key={app.id} {...app} />)}
        </div>
      </div>
    </div>
  );
}
