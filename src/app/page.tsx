/**
 * @import Image as next/image
 * @import Link as next/link
 * @import LogoIcon as Icon
 */

import Image from "next/image";
import LogoIcon from '@/app/icon.png'
import Link from "next/link";

/**
 * @function Home
 * @constant
 * @type {Record<string,string>}
 * @returns {React.ReactNode}
 */
export default function Home(): React.ReactNode {

  const data: Record<string, string> = {
    title: "NUV GAMES API",
    desc: "Free Open Source Program - Api Games Checker",
    to: "READ DOCS"
  }

  return (
    <div className="">
      <div className="font-[family-name:var(--font-geist-mono)]">
        <main className="w-full min-h-screen flex items-center justify-center">
          <div className="flex items-center">
            <Image src={LogoIcon} alt="nuv_icon" width={128} height={128} draggable={false} />
            <div className="flex flex-col max-w-72">
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="text-sm">{data.desc}</p>
              <Link href="/docs" className="text-sm bg-indigo-500 text-white px-3 py-1.5 rounded w-fit mt-1.5 font-[family-name:var(--font-geist-sans) hover:bg-indigo-500/90 active:scale-[.95] transition">{data.to}</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
