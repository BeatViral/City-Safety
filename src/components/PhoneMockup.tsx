import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  AlertTriangle,
  Camera,
  CarFront,
  CheckCheck,
  ChevronLeft,
  Clock3,
  Footprints,
  MapPinned,
  Mic,
  MoreVertical,
  Paperclip,
  Route,
  Send,
  ShieldCheck,
  Signal,
  Sparkles,
  Wifi,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import type { SafetyExample, SafetyRecommendation } from '../types'
import { BrandMark } from './BrandMark'
import { RouteMap } from './RouteMap'

const recommendationIcons = {
  car: CarFront,
  alert: AlertTriangle,
  walk: Footprints,
  shield: ShieldCheck,
  route: Route,
  clock: Clock3,
}

type PhoneMockupProps = {
  example: SafetyExample
  isLoading: boolean
  customMessage: string
  customMode: boolean
  onCustomSubmit: (message: string) => void
  className?: string
}

function RecommendationRow({ item }: { item: SafetyRecommendation }) {
  const Icon = recommendationIcons[item.icon]
  return (
    <li className="recommendation-row">
      <span className={`recommendation-icon recommendation-${item.severity}`}><Icon /></span>
      <p><strong>{item.label}:</strong> {item.detail}</p>
    </li>
  )
}

function TypingIndicator() {
  return (
    <motion.div className="typing-bubble" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}>
      <span /><span /><span />
    </motion.div>
  )
}

function PrototypeNotice() {
  return (
    <motion.div className="assistant-bubble prototype-notice" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <div className="transformation-label"><Sparkles /> Messy In <span>→</span> Beautiful Out</div>
      <div className="notice-card">
        <BrandMark size="md" />
        <div>
          <strong>That journey is not connected yet.</strong>
          <p>This prototype currently demonstrates selected journeys. Choose one of the connected examples below to see the complete City Safety experience.</p>
        </div>
      </div>
    </motion.div>
  )
}

function AssistantReply({ example }: { example: SafetyExample }) {
  return (
    <motion.div
      className="assistant-bubble"
      initial={{ opacity: 0, y: 16, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="transformation-label"><Sparkles /> Messy In <span>→</span> Beautiful Out</div>
      <div className="verdict-panel">
        <BrandMark size="lg" />
        <div>
          <h3>{example.verdictTitle}</h3>
          <p>{example.verdictBody}</p>
        </div>
      </div>
      <ul className="recommendation-list">
        {example.recommendations.map((item) => <RecommendationRow item={item} key={item.label} />)}
        <li className="recommendation-row confidence-row">
          <span className="recommendation-icon recommendation-info"><ShieldCheck /></span>
          <p><strong>Confidence:</strong> {example.confidence}</p>
        </li>
      </ul>
      <div className="evidence-line"><MapPinned />{example.evidenceNote}</div>
    </motion.div>
  )
}

export function PhoneMockup({
  example,
  isLoading,
  customMessage,
  customMode,
  onCustomSubmit,
  className = '',
}: PhoneMockupProps) {
  const [input, setInput] = useState('')
  const reduceMotion = useReducedMotion()
  const displayedMessage = customMode ? customMessage : example.userMessage

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = input.trim()
    if (!value) return
    onCustomSubmit(value)
    setInput('')
  }

  return (
    <motion.div
      className={`phone-wrap ${className}`}
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
    >
      <div className="phone-side phone-side-left-one" />
      <div className="phone-side phone-side-left-two" />
      <div className="phone-side phone-side-right" />
      <div className="phone-shell">
        <div className="phone-screen">
          <div className="status-bar">
            <strong>9:41</strong>
            <span className="dynamic-island"><i /></span>
            <span className="status-icons"><Signal /><Wifi /><i className="battery" /></span>
          </div>
          <div className="chat-header">
            <ChevronLeft className="chat-back" />
            <BrandMark size="md" />
            <div className="chat-title">
              <strong>City Safety</strong>
              <span>Travel Safety Assistant <ShieldCheck /></span>
            </div>
            <MoreVertical className="chat-more" />
          </div>

          <div className="chat-body" aria-live="polite">
            <span className="today-pill">Today</span>
            <AnimatePresence mode="wait">
              <motion.div
                className="chat-conversation"
                key={`${customMode ? 'custom' : example.id}-${displayedMessage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div className="user-bubble" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}>
                  <p>{displayedMessage}</p>
                  <span>9:32 PM <CheckCheck /></span>
                </motion.div>
                {isLoading ? <TypingIndicator /> : customMode ? <PrototypeNotice /> : <AssistantReply example={example} />}
                {!isLoading && !customMode && <RouteMap city={example.city} mapNote={example.mapNote} compact />}
              </motion.div>
            </AnimatePresence>
          </div>

          <form className="message-composer" onSubmit={handleSubmit}>
            <button type="button" aria-label="Attach a file"><Paperclip /></button>
            <label>
              <span className="sr-only">Message City Safety</span>
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Message City Safety"
              />
              <Camera />
            </label>
            <button className={input.trim() ? 'composer-send' : 'composer-mic'} type={input.trim() ? 'submit' : 'button'} aria-label={input.trim() ? 'Send message' : 'Voice message'}>
              {input.trim() ? <Send /> : <Mic />}
            </button>
          </form>
          <span className="home-indicator" />
        </div>
      </div>
    </motion.div>
  )
}
