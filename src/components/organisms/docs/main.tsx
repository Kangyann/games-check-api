import React from "react";

export default function MainDocsComponent({ children, title }: Readonly<{ children: React.ReactNode, title: string }>) {
    return (
        <React.Fragment>
            <div className="mb-6 w-full">
                <h4 className="text-2xl font-medium">{title}</h4>
                <div className="space-y-2 mt-3 text-sm px-3">
                    {children}
                </div>
            </div>
        </React.Fragment>
    )

}