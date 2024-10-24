import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'

/**
 * Using a state forces a new render
 * for consumer components
 * when "isClient" becomes true
 * An effect with an empty array as dependency
 * only runs once when the component is "mounted"
 */
export function useClient_EffectAndState() {
  const [isClient, setIsClient] = useState<boolean>(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return isClient
}

/**
 * @credits HeadlessUI
 */
export function useClient_LayoutEffect() {
  const [isClient, setIsClient] = useState<boolean>(false)
  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      setIsClient(true)
    }, [])
  } else {
    // hack to respect the rule of hooks
    useEffect(() => {}, [])
  }
  return isClient
}

/**
 * The useSyncExternalStore has a built-in logic
 * to detect being client-side
 * @credits TkDodo https://tkdodo.eu/blog/
 */
export function useClient_SyncStore() {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  return isClient
}

/**
 * Using a ref means an update of ""
 * @returns
 */
export function useClient_NonReactiveRef() {
  let mounted = useRef(false)
  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])
  return mounted
}
