export default function Docs() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            <div className="container mx-auto p-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-indigo-500">NUV GAMES API</h1>
                <a href="https://wa.me/6283829055059?text=''" className="text-sm bg-indigo-500 text-white px-3 py-1.5 rounded w-fit mt-1.5 font-[family-name:var(--font-geist-sans) hover:bg-indigo-500/90 active:scale-[.95] transition">Contact Us</a>
            </div>
            <hr className="text-gray-100" />
            <div className="flex container mx-auto relative">
                <section className="flex-1 flex flex-col space-y-1.5 p-3 text-sm overflow-x-hidden">
                    <a href="/docs" className="hover:underline transition">Getting Started</a>
                    <small className="font-medium text-xs">Request</small>
                    <div className="flex flex-col gap-1.5 ms-3">
                        <a href="/docs/list-game" className="hover:underline transition"><span className="text-indigo-500 font-medium">[ GET ]</span> List Game</a>
                        <a href="/docs/check-user-game" className="hover:underline transition"><span className="text-yellow-500 font-medium">[ POST ]</span> Check User Game</a>
                    </div>
                </section>
                <main className="flex-[3] border-e border-s border-gray-100 p-3 h-[1000]">
                    <div className="">
                        <h4>Description</h4>
                    </div>
                </main>
                <section className="flex-1 p-3">
                    <div className="sticky top-3">
                        <small className="font-medium text-xs">On This Page</small>
                        <ul className="m-3 space-y-1.5">
                            <li>Text on page</li>
                            <li>Text on page</li>
                            <li>Text on page</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}