import AppCard from '@/components/AppCard';
import { NextApp, nextApps } from '../utils/app-data';

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-black bg-gradient-to-b from-black to-blue-950">
      <h1 className="text-4xl mb-2 text-white font-bold tracking-widest">Up NeXT</h1>

      <h2 className="text-2xl text-white">
        Navigate to the Apps that you can play around with from the header.
      </h2>

      <div className={`w-auto h-auto flex flex-row flex-wrap items-start justify-evenly gap-4 mt-6 p-4 py-6 border-4 border-sky-500 rounded-xl`}>
        {nextApps.map((app: NextApp) => <AppCard key={app.id} {...app} />)}
      </div>
    </div>
  );
}
