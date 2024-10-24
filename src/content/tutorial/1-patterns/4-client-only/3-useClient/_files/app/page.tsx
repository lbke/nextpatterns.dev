import { Suspense } from 'react'
import {
  IsOnline_BrowserOnly,
  IsOnline_EffectAndState,
  IsOnline_WrongSolution,
} from './components'

export default function Page() {
  return (
    <div>
      <h1>❌ Rendering window</h1>
      {/**
       * This component will crash server-side.
       * The Suspense boundary prevents crashing the whole page.
       */}
      <Suspense>
        <IsOnline_BrowserOnly />
      </Suspense>
      {/**
       * This component will crash client-side,
       * during hydration.
       */}
      <h1>❌ Wrong solution</h1>
      <Suspense>
        <IsOnline_WrongSolution />
      </Suspense>
      <h1>✅ Effect & state'</h1>
      {/**
       * Works perfectly!
       */}
      <IsOnline_EffectAndState />
    </div>
  )
}
