'use client'
/**
 * @import MainDocsComponent as Component,
 * @import HightLightAtoms as Component,
 * @import datajson as Json,
 * @import useOnThisPage as Context,
 */
import { useEffect } from "react";

import { useOnThisPage } from "@/context/OnThisPage";
import MainDocsComponent from "@/components/organisms/docs/main"
import HightLightAtom from '@/components/atoms/highlight';
import datajson from "@/data/pages/docs/list-games.json"

/**
 * @constant
 * @type {Record<string,any>[]}
 * @function DocsListGames
 * @returns {React.ReactNode}
 */

export default function DocsListGames(): React.ReactNode {
    const { setItems } = useOnThisPage()
    const { data, dataWithCode } = datajson as { data: Record<string, any>[], dataWithCode: Record<string, any>[] }

    useEffect(() => {
        setItems([
            { id: 'endpoint', label: 'Endpoint' },
            { id: 'what-is-list-games', label: 'What is this Api ?' },
            { id: 'example-request', label: 'Example Request' },
            { id: 'example-fetch', label: 'Example Fetch' },
            { id: 'example-response', label: 'Example Response' },
        ])
    }, [setItems])
    
    return (<>
        {data.map((value: Record<string, any>, index: number): React.ReactNode => (
            <MainDocsComponent title={value.title} key={`list-games-${index}`} id={value.id}>
                {value.html && (
                    <p dangerouslySetInnerHTML={{ __html: value.desc.replace(/className=/g, 'class=') }} />
                )}
                {!value.html && <p>{value.desc}</p>}
                {value.other && (
                    <>
                        {value.other.map((item: string, index: number) => (
                            <li key={`list-games-other-item${index}`}>{item}</li>
                        ))}
                    </>
                )}
            </MainDocsComponent>
        ))}
        {dataWithCode.map((value: Record<string, any>, index: number): React.ReactNode => (
            <MainDocsComponent title={value.title} key={`list-games-data-w-code-${index}`} id={value.id}>
                <HightLightAtom type={value.type} title={value.highlight_title}>
                    {value?.code && <code>{value.code}</code>}
                    {value?.json && <pre>{JSON.stringify(value.json, null, 2)}</pre>}
                    {value?.pre && <pre className="whitespace-pre-wrap">{value.pre}</pre>}
                </HightLightAtom>
            </MainDocsComponent>
        ))}
    </>)
}