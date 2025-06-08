import React from "react";

export default function TableComponent({ header, caption, children }: { header: string[], caption: string, children: React.ReactNode }) {
    return (
        <div className="overflow-x-auto max-w-full">
            <table className="table-auto border-collapse border border-gray-100 w-full text-sm">
                <caption className="caption-bottom my-1.5 text-xs">{caption}</caption>
                <thead>
                    <tr>
                        {header.map((items, index) => (
                            <th key={`${items}-${index}`} className="px-3 py-1.5 text-nowrap border border-gray-100 text-left ">{items}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {children}
                </tbody>
            </table>
        </div>
    )

}