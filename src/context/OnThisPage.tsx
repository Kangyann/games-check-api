'use client'

import React, { createContext, useContext, useState } from 'react'

export interface OnThisPageItem {
    id: string
    label: string
}

interface OnThisPageContextType {
    items: OnThisPageItem[]
    setItems: (items: OnThisPageItem[]) => void
}

// Buat context dengan nilai default undefined
const OnThisPageContext = createContext<OnThisPageContextType | undefined>(undefined)

// Hook untuk gunakan context di komponen client
export const useOnThisPage = () => {
    const context = useContext(OnThisPageContext)
    if (!context) {
        throw new Error('useOnThisPage must be used within an OnThisPageProvider')
    }
    return context
}

// Provider utama yang digunakan di layout
export const OnThisPageProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<OnThisPageItem[]>([])

    return (
        <OnThisPageContext.Provider value={{ items, setItems }}>
            {children}
        </OnThisPageContext.Provider>
    )
}
