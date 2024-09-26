"use client"

import { useClient } from "../hooks/useClient"

/**
 * Avoid layout shift for span (short text) that display only client-side
 * Can also handle async loading with "loading"
 * @param param0 
 * @returns 
 */
export function NoShiftClientOnlySpan({ children, hide }: { hide?: boolean, children: React.ReactNode }) {
    const isClient = useClient()
    if (!isClient || hide) return <span style={{ opacity: 0 }}>{"| "}</span>
    return <span style={{ opacity: 1, transition: "opacity 0.1s" }}>
        {children}
    </span>
}