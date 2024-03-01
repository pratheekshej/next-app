import AppCard from '@/components/AppCard';
import { NextApp, nextApps } from '../utils/app-data';

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-black bg-gradient-to-b from-white to-green-200">
      <h1 className="text-9xl mb-2 font-bold tracking-wide"><span className='text-green-500'>Up</span> NexT</h1>

      <h2 className="text-md pt-8 w-[52%]">
        This is where I bring ideas to life, crafting interactive and dynamic applications using React and the power of Next.js. Explore my portfolio to discover a world of engaging interfaces, seamless user experiences, and innovative solutions built with these cutting-edge technologies.
      </h2>

      <div className={`w-auto h-auto flex flex-row flex-wrap items-start justify-evenly gap-4 mt-6 p-4 py-6 border-[1px] border-green-500 rounded-lg`}>
        {nextApps.map((app: NextApp) => <AppCard key={app.id} {...app} />)}
      </div>
    </div>
  );
}
