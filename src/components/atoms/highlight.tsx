export default function HightLightAtom({ children, type, title }: Readonly<{ children: React.ReactNode, type: string, title: string }>) {
    return (
        <>
            <div className="mb-3">
                <h6 className="">{title}</h6>
                <div className="w-full shadow border border-gray rounded">
                    <div className="flex items-center justify-between px-3 py-1" id="highlight_header">
                        <small>{type}</small>
                        <small className="flex items-center gap-1.5 cursor-pointer">
                            Copy
                        </small>
                    </div>
                    <div className="p-3 overflow-x-auto max-w-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}