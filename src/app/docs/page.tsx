"use client"
import { useEffect } from "react";
import { useOnThisPage } from "@/context/OnThisPage";
import MainDocsComponent from "@/components/organisms/docs/main"
import HightLightAtoms from '@/components/atoms/highlight';
import datajson from "@/data/pages/docs/getting-started.json"

export default function Docs() {
    const { data } = datajson
    const { setItems } = useOnThisPage()

    useEffect(() => {
        setItems(datajson.anhcor_link)
    }, [setItems])

    return (
        <>
            {data && data.map((value, index) => (
                <MainDocsComponent title={value.title} key={`${value.alt}-${index}`} id={value.id}>
                    <p>{value.desc}</p>
                    {value.other && (
                        <ul className="list-disc ms-6 space-y-1.5">
                            {value.other.map((items, index) => (
                                <li key={`${items}-${index}`}>{items}</li>
                            ))}
                        </ul>
                    )}
                    {value.dataWithCode && value.dataWithCode.map((items, index) => (
                        <HightLightAtoms type={items.type} title={items.title} key={`${items.alt}-${index}`} data={items.json ?? items.code}>
                            {items.code && <code>{items.code}</code>}
                            {items.json && <pre>{JSON.stringify(items.json, null, 2)}</pre>}
                        </HightLightAtoms>
                    ))}
                </MainDocsComponent>
            ))}
            <MainDocsComponent title="Contribute on Github" id="contribute">
                <p>We welcome contributions!</p>
                <p>If you’d like to improve the API, fix bugs, or suggest new features, feel free to open an issue or submit a pull request on our <a href="https://github.com/kangyann/games-check-api" className="text-indigo-500 hover:underline hover:text-indigo-700 transition">GitHub repository.</a></p>
                <p>Your feedback and contributions help make this API better for everyone!</p>
                <div className="border-s-4 border-s-gray-200 px-3 py-1.5 rounded text-indigo-500">Let’s build something great together!</div>
            </MainDocsComponent>
        </>
    )
}