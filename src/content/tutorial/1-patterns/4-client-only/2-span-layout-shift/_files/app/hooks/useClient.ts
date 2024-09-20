import { useSyncExternalStore } from "react"

/**
 * A transition friendly client-only hook
 * Returns false server-side,
 * and true if we render in a browser
 * @see https://x.com/TkDodo/status/1741068994981826947
 */
export const useClient = () => {
    const emptySubscribe = () => () => { }
    const isClient = useSyncExternalStore(
        emptySubscribe, () => true, () => false)
    return isClient
}