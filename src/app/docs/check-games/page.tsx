"use client"
import MainDocsComponent from '@/components/organisms/docs/main';
import HightLightAtom from '@/components/atoms/highlight';
import datajson from '@/data/pages/docs/check-games.json'
import TableComponent from '@/components/organisms/docs/tables';
import { useOnThisPage } from '@/context/OnThisPage';
import { useEffect, useState } from 'react';
import { CombinedGames } from '@/data/combined-games';
import { ListGamesType } from '@/data/list-games';
import { formatTitle } from '@/utils/formatTitle';
import Link from 'next/link';
export default function DocsCheckUserGame() {
    const { data } = datajson
    const { setItems } = useOnThisPage()
    const [category, setCategory] = useState<string>("mobile-legends")

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
                    <p>{value.desc}</p>
                    {value.other && (
                        <span>
                            <ul className="list-disc ms-6 space-y-3">
                                {value.other.map((items, index) => (
                                    <li key={`${items}-${index}`} className={`${index == 2 ? "font-semibold" : ""}`}>{items}</li>
                                ))}
                            </ul>
                            {value.link && (<p className="my-1">Find a type of game here.<Link href={value.link.to} className="text-indigo-500 hover:underline transition">{value.link.text}</Link></p>)}
                            <div className="flex items-center gap-1.5 my-1">
                                <label id="type_games" htmlFor="type_games">Choose a game types : </label>
                                <select name="type_games" id="type_games" title="Choose game type." className="border rounded w-fit px-3 py-1 border-gray-100 cursor-pointer" onChange={(e) => setCategory(e.currentTarget.value)}>
                                    {ListGamesType.map((items, index) => (
                                        <option value={items} key={`${items}-${index}`}>{formatTitle({ text: items })}</option>
                                    ))}
                                </select>
                            </div>
                        </span>
                    )}
                </MainDocsComponent>
            ))}
            {CombinedGames[category] && CombinedGames[category].map((value: any, index: number) => (
                <MainDocsComponent title={value.title} id={value.id} key={`${value.id}-${index}`}>
                    {value.dataTable && (
                        <TableComponent header={value.dataTable.column_header} caption={value.dataTable.caption}>
                            {value.dataTable.column_body.map((items: any, index: any) => (
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
            ))
            }
        </>)
}