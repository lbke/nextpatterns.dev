'use client'
import { Component, useState } from 'react'

export function Tabs({
  tabs,
  titles,
}: {
  tabs: Array<React.ReactNode>
  titles: Array<string>
}) {
  const [activeTabIdx, setActiveTabIdx] =
    useState<number>(0)
  const activeTab = tabs[activeTabIdx]
  return (
    <div>
      <div>
        <ErrorBoundary>
          {titles.map((title, idx) => (
            <button
              key={title}
              className={`${idx === activeTabIdx ? 'font-bold' : ''}`}
              onClick={() => {
                setActiveTabIdx(idx)
              }}
            >
              {title}
            </button>
          ))}
        </ErrorBoundary>
      </div>
      <div>{activeTab}</div>
    </div>
  )
}

export class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Caught an error', error)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Can't render this component.</h1>
    }

    return this.props.children
  }
}
