import { NextApp } from "@/utils/app-data";
import Link from "next/link";

const AppCard = ({ title, description, href }: NextApp) => {
  return (
    <Link href={href} className="
        p-6
        w-[45%]
        flex-col
        items-center
        justify-center
        bg-gradient-to-tr from-black via-blue-600 to-black
        rounded-md
        hover:text-white
        hover:cursor-pointer
      ">
      <label className="font-semibold">{title}</label>
      <p className="font-medium">{description}</p>
    </Link>
  )
}

export default AppCard