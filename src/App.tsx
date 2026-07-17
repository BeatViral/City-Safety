import { useEffect, useRef, useState } from 'react'
import { safetyExamples } from './data/examples'
import { Navbar } from './components/Navbar'
import {
  BeforeAfter,
  Coverage,
  FinalCTA,
  Footer,
  Hero,
  HowItWorks,
  InteractiveDemo,
  Principles,
  PromptSection,
  Transformation,
  WhyItMatters,
} from './components/Sections'
import type { SafetyExample } from './types'

function App() {
  const [example, setExample] = useState<SafetyExample>(safetyExamples[0])
  const [isLoading, setIsLoading] = useState(false)
  const [customMessage, setCustomMessage] = useState('')
  const [customMode, setCustomMode] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }, [])

  const beginReply = (callback: () => void) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    callback()
    setIsLoading(true)
    timerRef.current = setTimeout(() => setIsLoading(false), 850)
  }

  const handleSelect = (selected: SafetyExample) => {
    beginReply(() => {
      setExample(selected)
      setCustomMode(false)
    })
  }

  const handleCustomSubmit = (message: string) => {
    beginReply(() => {
      setCustomMessage(message)
      setCustomMode(true)
    })
  }

  const handlePromptSelect = (selected: SafetyExample) => {
    handleSelect(selected)
    window.setTimeout(() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
  }

  const phoneState = { example, isLoading, customMessage, customMode, onCustomSubmit: handleCustomSubmit }

  return (
    <>
      <Navbar />
      <Hero {...phoneState} />
      <HowItWorks />
      <InteractiveDemo {...phoneState} examples={safetyExamples} onSelect={handleSelect} />
      <BeforeAfter />
      <PromptSection examples={safetyExamples} onPromptSelect={handlePromptSelect} />
      <Coverage />
      <Principles />
      <WhyItMatters />
      <Transformation />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default App
