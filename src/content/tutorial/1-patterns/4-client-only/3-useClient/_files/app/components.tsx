'use client'
import { useClient_EffectAndState } from './hooks'

/**
 * ❌ `window` doesn't exist server-side
 */
export function IsOnline_BrowserOnly() {
  console.log(
    'Rendering BrowserOnly version. Is window defined:',
    typeof window !== 'undefined'
  )
  return window.navigator.onLine ? (
    <p>User is connected to the internet</p>
  ) : (
    <p>Internet seems down :'(</p>
  )
}
/**
 * ❌ This will lead to an hydration mismatch
 * between the server render and the client render
 */
export function IsOnline_WrongSolution() {
  console.log(
    'Rendering wrong solution. Is window defined:',
    typeof window !== 'undefined'
  )
  if (typeof window === 'undefined') return null
  return window.navigator.onLine ? (
    <p>User is connected to the internet</p>
  ) : (
    <p>Internet seems down :'(</p>
  )
}

/**
 * ✅ Proper React code,
 * compatible with server-side prerendering
 * and client-side rendering
 */
export function IsOnline_EffectAndState() {
  const isClient = useClient_EffectAndState()
  console.log(
    'Rendering EffectAndState version. Is client:',
    isClient
  )
  if (!isClient) return null
  return <IsOnline_BrowserOnly />
}
