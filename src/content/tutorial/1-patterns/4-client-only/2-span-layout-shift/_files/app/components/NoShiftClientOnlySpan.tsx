"use client"

/**
 * Avoid layout shift for span (short text) that display only client-side
 * Can also handle async loading with "loading"
 * @param param0 
 * @returns 
 */
export function NoShiftClientOnlySpan({ children, hasData }: { hasData?: boolean, children: React.ReactNode }) {
    /** 
     * 🔨 PRACTICE HERE: 
     * Implement NoShiftClientOnlySpan.tsx
     * - if hasData is false, return a span, with content "|" and opacity 0
     * - if hasData is true, return a span, with content {childen} and opacity 1
     */
    return children
}