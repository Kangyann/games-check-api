"use client"
import { useState } from "react";

export default function HightLightAtom({ children, type, title, data }: Readonly<{ children: React.ReactNode, type: string, title: string, data: string | Record<string, any> }>) {

    const [message, setMessage] = useState<string>("");

    const handleCopy = async () => {
        if (typeof data === "string") {
            await navigator.clipboard.writeText(data);
        } else if (typeof data === "object" && data !== null) {
            await navigator.clipboard.writeText(JSON.stringify(data, null, 2));
        }
        setMessage("Text Copied")
        setTimeout(() => {
            setMessage("")
        }, 1000);
    };
    return (
        <>
            <div className="mb-3">
                <h6 className="">{title}</h6>
                <div className="w-full shadow border border-gray rounded">
                    <div className="flex items-center justify-between px-3 py-1" id="highlight_header">
                        <small>{type}</small>
                        <button className="relative flex items-center gap-1.5 cursor-pointer text-xs hover:ring hover:ring-gray-200 rounded px-2 py-1 transition active:scale-[0.95]" onClick={handleCopy}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>
                            Copy
                            {message.length > 1 && (
                                <div className="absolute left-0 -top-6 z-10 font-sm">{message}</div>
                            )}
                        </button>
                    </div>
                    <div className="p-3 overflow-x-auto max-w-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}