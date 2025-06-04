import Image from "next/image";
import LogoIcon from '@/app/icon.png'

export default function Home() {
  return (
    <div className="">
      <div className="font-[family-name:var(--font-geist-mono)]">
        <main className="w-full min-h-screen flex items-center justify-center">
          <div className="flex items-center">
            <Image src={LogoIcon} alt="nuv_icon" width={128} height={128} draggable={false} />
            <div className="flex flex-col max-w-72">
              <h1 className="text-2xl font-bold">NUV GAMES API</h1>
              <p className="text-sm">Free Open Source Program - Api Games Checker</p>
              <a href="/docs" className="text-sm bg-indigo-500 text-white px-3 py-1.5 rounded w-fit mt-1.5 font-[family-name:var(--font-geist-sans) hover:bg-indigo-500/90 active:scale-[.95] transition">READ DOCS</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
