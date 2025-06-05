import React from 'react';
import data from '@/data/pages/docs/data.json'
export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <React.Fragment>
            <div className="font-[family-name:var(--font-geist-sans)]">
                <div className="container mx-auto p-3 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-indigo-500">{data.title}</h1>
                    <a href="" className="text-sm bg-indigo-500 text-white px-3 py-1.5 rounded w-fit mt-1.5 font-[family-name:var(--font-geist-sans) hover:bg-indigo-500/90 active:scale-[.95] transition">{data['contact-us'].title}</a>
                </div>
                <hr className="text-gray-100" />
                <div className="flex container mx-auto relative">
                    <section className="flex-1 flex flex-col space-y-1.5 p-3 text-sm overflow-x-hidden min-h-screen border-e border-gray-100">
                        {data['sidebar-link'].map((value: Record<string, any>, index: number) => (
                            <React.Fragment key={`${value.alt}-${index}`}>
                                {!value.to && (
                                    <small className="text-xs">{value.title}</small>
                                )}
                                {value.to && (
                                    <a href={value.to} className="hover:underline transition">{value.title}</a>
                                )}
                                {value.data && (
                                    <div className="flex flex-col gap-1.5 ms-3">
                                        {value.data.map((value: Record<string, any>, index: number) => (
                                            <React.Fragment key={`${value.alt}-${index}`}>
                                                <a href={`${value.to}`} className="hover:underline transition"><span className={`text-${value.color} font-medium`}>{value.type}</span> {value.text}</a>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </section>
                    <main className="relative flex-[3] p-3 pb-6">
                        {children}
                        <footer className="fixed w-full left-0 bottom-0 text-sm font-[family-name:var(--font-geist-mono)] bg-white border-t border-gray-100 py-1.5">
                            <div className="flex justify-center items-center gap-1.5">
                                <p>2025 &copy; Made With ♡ </p>
                                <a href="">kangyann.dev</a>
                            </div>
                        </footer>
                    </main>
                    <section className="flex-1 p-3 border-s border-gray-100 min-h-screen">
                        <div className="sticky top-3">
                            <small className="font-medium text-xs">On This Page</small>
                            <ul className="m-3 space-y-1.5 text-sm">
                                <li>Getting Started</li>
                                <li>What You Can Do ?</li>
                                <li>Using the examples </li>
                                <li>Notes</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}