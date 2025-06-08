"use client"
import MainDocsComponent from '@/components/organisms/docs/main';
import HightLightAtom from '@/components/atoms/highlight';
import datajson from '@/data/pages/docs/check-games.json'
import TableComponent from '@/components/organisms/docs/tables';
import { useOnThisPage } from '@/context/OnThisPage';
import { useEffect } from 'react';
export default function DocsCheckUserGame() {
    const { data } = datajson
    const { setItems } = useOnThisPage()

    useEffect(() => {
        setItems([
            { id: 'endpoint', label: 'Endpoint' },
            { id: 'example-request', label: 'Example Request' },
            { id: 'example-fetch', label: 'Example Fetch' },
            { id: 'example-response', label: 'Example Response' },
        ])
    }, [setItems])
    return (
        <>
            {data && data.map((value, index) => (
                <MainDocsComponent title={value.title} key={`${value.title}-${index}`} id={value.id}>
                    {/* <div className=""></div> */}
                    <p>{value.desc}</p>
                    {value.other && (
                        <ul className="list-disc ms-6 space-y-3">
                            {value.other.map((items, index) => (
                                <li key={`${items}-${index}`} className={`${index == 2 ? "font-semibold" : ""}`}>{items}</li>
                            ))}
                        </ul>
                    )}
                    {value.dataTable && (
                        <TableComponent header={value.dataTable.column_header} caption={value.dataTable.caption}>
                            {value.dataTable.column_body.map((items, index) => (
                                <tr key={`${items.name}-${index}`}>
                                    <td className="px-3 py-1.5 border border-gray-100"><i className="bg-[rgb(0,0,0,.075)] p-1 rounded">{items.name}</i></td>
                                    <td className="px-3 py-1.5 border border-gray-100">{items.type}</td>
                                    <td className="px-3 py-1.5 border border-gray-100">{items.req}</td>
                                    <td className="px-3 py-1.5 border border-gray-100">{items.desc}</td>
                                </tr>
                            ))}
                        </TableComponent>

                    )}
                    {value.code && (
                        <HightLightAtom type={value.code.type} title={value.code.title}>
                            {value.code.json && <pre>{JSON.stringify(value.code.json, null, 2)}</pre>}
                            {value.code.pre && <pre>{value.code.pre}</pre>}
                        </HightLightAtom>
                    )}
                </MainDocsComponent>
            ))}
        </>)
}