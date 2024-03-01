import { NextApp } from "@/utils/app-data";
import Link from "next/link";

const AppCard = ({ title, description, href }: NextApp) => {
  return (
    // bg-gradient-to-tr from-black via-blue-600 to-black
    <Link href={href} className="
        p-6
        w-[45%]
        flex-col
        items-center
        justify-center
        rounded-md
        bg-slate-100
        shadow-xl
        hover:cursor-pointer
        hover:shadow-2xl
      ">
      <label className="font-semibold text-green-500">{title}</label>
      <p className="font-medium">{description}</p>
    </Link>
  )
}

export default AppCard