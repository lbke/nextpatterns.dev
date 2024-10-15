"use client"

/**
 * Avoid layout shift for span (short text) that display only client-side
 * Can also handle async loading with "loading"
 * @param param0 
 * @returns 
 */
export function NoShiftClientOnlySpan({ children, hasData }: { hasData?: boolean, children: React.ReactNode }) {
    if (!hasData) return <span style={{ opacity: 0 }}>{"| "}</span>
    return <span style={{ opacity: 1, transition: "opacity 0.1s" }}>
        {children}
    </span>
}