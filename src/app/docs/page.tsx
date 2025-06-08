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
        setItems([
            { id: 'getting-started', label: 'Introduction' },
            { id: 'what-you-can-do', label: 'What Is This Api ?' },
            { id: 'using-the-ex', label: 'Using The Examples' },
            { id: 'notes', label: 'Notes' },
        ])
    }, [setItems])
    return (
        <>
            {data && data.map((value, index) => (
                <MainDocsComponent title={value.title} key={`${value.alt}-${index}`} id={value.id}>
                    {value.other && (
                        <ul className="list-disc">
                            {value.other.map((items, index) => (
                                <li key={`${items}-${index}`}>{items}</li>
                            ))}
                        </ul>
                    )}
                    {!value.other && <p>{value.desc}</p>}
                    {value.dataWithCode && value.dataWithCode.map((items, index) => (
                        <HightLightAtoms type={items.type} title={items.title} key={`${items.alt}-${index}`}>
                            {items.code && <code>{items.code}</code>}
                            {items.json && <pre>{JSON.stringify(items.json, null, 2)}</pre>}
                        </HightLightAtoms>
                    ))}
                </MainDocsComponent>
            ))}
        </>
    )
}