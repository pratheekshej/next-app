import { NextApp } from "@/utils/app-data";
import Link from "next/link";

const AppCard = ({ title, description, href }: NextApp) => {
  return (
    // bg-gradient-to-tr from-black via-blue-600 to-black
    <Link href={href} className="
        p-6
        w-[300px]
        flex-col
        items-center
        justify-center
        rounded-md
        bg-slate-100
        shadow-lg
        hover:cursor-pointer
        hover:shadow-2xl
      ">
      <label className="font-semibold text-green-500">{title}</label>
      <p className="font-medium text-ellipsis" title={description}>{`${description.slice(0, 50)}...`}</p>
    </Link>
  )
}

export default AppCard