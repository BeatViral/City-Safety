import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  Check,
  ChevronRight,
  CircleCheck,
  Compass,
  Database,
  Footprints,
  HeartHandshake,
  Map,
  MapPin,
  MessageCircleMore,
  MoonStar,
  Navigation,
  Route,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import type { SafetyExample } from '../types'
import { BrandMark } from './BrandMark'
import { PhoneMockup } from './PhoneMockup'
import { Reveal } from './Reveal'

type PhoneStateProps = {
  example: SafetyExample
  isLoading: boolean
  customMessage: string
  customMode: boolean
  onCustomSubmit: (message: string) => void
}

type HeroProps = PhoneStateProps

export function Hero(props: HeroProps) {
  const reduceMotion = useReducedMotion()

  return (
    <main className="hero" id="top">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="page-shell hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow"><Sparkles /> Messy In <i>→</i> Beautiful Out</span>
          <h1>Never enter a city <em>blind.</em></h1>
          <p className="hero-lead">Tell us where you’re going, when you’re arriving and who is with you. City Safety turns a messy travel concern into a calmer, safer plan.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#demo">Try a travel question <ArrowRight /></a>
            <a className="button button-secondary" href="#how-it-works">See how it works <ArrowDown /></a>
          </div>
          <p className="hero-note"><ShieldCheck /> Designed for unfamiliar cities, late arrivals and the moments when a map alone is not enough.</p>
          <div className="hero-proof" aria-label="Product qualities">
            <span><i className="proof-dot" /> Clear verdicts</span>
            <span><i className="proof-dot" /> Honest confidence</span>
            <span><i className="proof-dot" /> Practical routes</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-phone-stage"
          initial={reduceMotion ? false : { opacity: 0, x: 42, rotate: 1.5 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="phone-halo" />
          <span className="floating-note floating-note-one"><MoonStar /> After-dark context</span>
          <span className="floating-note floating-note-two"><Route /> Safer route found</span>
          <PhoneMockup {...props} className="hero-phone" />
        </motion.div>
      </div>
      <a className="hero-scroll" href="#how-it-works" aria-label="Scroll to how it works"><span>Discover</span><ArrowDown /></a>
    </main>
  )
}

const steps = [
  {
    number: '01',
    icon: MessageCircleMore,
    title: 'Tell us the real situation',
    copy: 'Send a natural message about where you are going, when you are arriving and what concerns you.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'City Safety finds what matters',
    copy: 'The journey, time, local patterns, travel mode and traveller context are considered together.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Receive a calmer plan',
    copy: 'Get one clear verdict, practical cautions, a more suitable route and the reasoning behind it.',
  },
]

export function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="page-shell">
        <Reveal className="section-heading centered-heading">
          <span className="eyebrow">How it works</span>
          <h2>A messy concern becomes<br />one clear decision.</h2>
        </Reveal>
        <div className="steps-grid">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal className="step-card" delay={index * 0.08} key={step.number}>
                <div className="step-card-top"><span>{step.number}</span><Icon /></div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="judgement-line"><span />Not more information. <em>Better judgement.</em><span /></Reveal>
      </div>
    </section>
  )
}

type InteractiveDemoProps = PhoneStateProps & {
  examples: SafetyExample[]
  onSelect: (example: SafetyExample) => void
}

export function InteractiveDemo({ examples, onSelect, ...phoneProps }: InteractiveDemoProps) {
  return (
    <section className="section demo-section" id="demo">
      <div className="page-shell demo-grid">
        <div className="demo-copy">
          <Reveal>
            <span className="eyebrow eyebrow-light"><Sparkles /> Interactive demo</span>
            <h2>Ask the question you would really ask.</h2>
            <p className="section-lead section-lead-light">Choose a connected journey and watch the message become a clear, practical plan.</p>
          </Reveal>
          <div className="example-selector" role="list" aria-label="Example travel questions">
            {examples.map((item, index) => (
              <Reveal delay={index * 0.045} key={item.id}>
                <button
                  type="button"
                  className={`example-option${phoneProps.example.id === item.id && !phoneProps.customMode ? ' active' : ''}`}
                  onClick={() => onSelect(item)}
                  aria-pressed={phoneProps.example.id === item.id && !phoneProps.customMode}
                >
                  <span className="example-number">0{index + 1}</span>
                  <span className="example-text"><strong>{item.city}</strong><small>{item.timeLabel}</small></span>
                  <ChevronRight />
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal className="demo-trust-note">
            <ShieldCheck />
            <p><strong>A prototype that protects trust.</strong> Type any other question and we will tell you honestly when that journey is not connected.</p>
          </Reveal>
        </div>
        <Reveal className="demo-phone-column" delay={0.12}>
          <div className="demo-phone-backdrop" />
          <PhoneMockup {...phoneProps} className="demo-phone" />
        </Reveal>
      </div>
    </section>
  )
}

const beforeItems = [
  'Fastest route',
  'Cheapest hotel',
  'Nearest station',
  'Generic reviews',
  'No time-of-day context',
  'No explanation of the final walk',
]

const afterItems = [
  'Whether the location is workable',
  'What changes after dark',
  'Which route is more sensible',
  'Common local risks',
  'One practical next step',
  'Confidence and evidence freshness',
]

export function BeforeAfter() {
  return (
    <section className="section comparison-section">
      <div className="page-shell">
        <Reveal className="section-heading split-heading">
          <span className="eyebrow">The missing layer</span>
          <h2>Maps show where to go.<br /><em>City Safety helps you decide how.</em></h2>
        </Reveal>
        <div className="comparison-grid">
          <Reveal className="comparison-card before-card">
            <div className="comparison-label"><Map /> Ordinary travel planning</div>
            <div className="mini-route" aria-hidden="true">
              <MapPin /><span className="mini-route-line" /><BedDouble />
              <small>12 min · fastest</small>
            </div>
            <ul>{beforeItems.map((item) => <li key={item}><X />{item}</li>)}</ul>
          </Reveal>
          <div className="comparison-arrow" aria-hidden="true"><ArrowRight /></div>
          <Reveal className="comparison-card after-card" delay={0.1}>
            <div className="comparison-label"><BrandMark size="sm" /> City Safety</div>
            <div className="mini-verdict">
              <ShieldCheck />
              <p><strong>Workable location.</strong><br />Take a taxi after 10 pm.</p>
            </div>
            <ul>{afterItems.map((item) => <li key={item}><Check />{item}</li>)}</ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const prompts = [
  'Is this hotel area okay after dark?',
  'Can I walk from the station with luggage?',
  'Where should our family stay?',
  'Is the cheaper Airbnb still a sensible choice?',
  'Should I take the train or a taxi after midnight?',
  'Is this route suitable for a solo traveller?',
  'Can I safely stop here while driving at night?',
  'What should I know before entering this city?',
]

type PromptSectionProps = {
  examples: SafetyExample[]
  onPromptSelect: (example: SafetyExample) => void
}

export function PromptSection({ examples, onPromptSelect }: PromptSectionProps) {
  return (
    <section className="section prompts-section" id="examples">
      <div className="page-shell prompts-shell">
        <Reveal className="section-heading">
          <span className="eyebrow">Real travel questions</span>
          <h2>People do not think<br />in crime statistics.</h2>
          <p className="section-lead">They ask ordinary questions about their family, hotel, route and arrival time.</p>
        </Reveal>
        <div className="prompt-cloud">
          {prompts.map((prompt, index) => (
            <motion.button
              type="button"
              key={prompt}
              onClick={() => onPromptSelect(examples[index % examples.length])}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ delay: index * 0.04 }}
            >
              <MessageCircleMore />
              <span>{prompt}</span>
              <ArrowRight />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

const regions = [
  { region: 'Europe', icon: 'EU', cities: ['London', 'Paris', 'Barcelona'] },
  { region: 'United States', icon: 'US', cities: ['Chicago', 'New York', 'Los Angeles'] },
  { region: 'Canada', icon: 'CA', cities: ['Toronto', 'Vancouver', 'Montreal'] },
  { region: 'Australia', icon: 'AU', cities: ['Sydney', 'Melbourne', 'Brisbane'] },
]

export function Coverage() {
  return (
    <section className="section coverage-section" id="coverage">
      <div className="page-shell">
        <Reveal className="section-heading coverage-heading">
          <div>
            <span className="eyebrow eyebrow-light">Built city by city</span>
            <h2>Global ambition.<br /><em>Local evidence.</em></h2>
          </div>
          <p>City Safety begins where reliable local information exists, then expands city by city.</p>
        </Reveal>
        <div className="region-grid">
          {regions.map((region, index) => (
            <Reveal className="region-card" delay={index * 0.07} key={region.region}>
              <div className="region-top"><span>{region.icon}</span><Navigation /></div>
              <h3>{region.region}</h3>
              <p>Initial examples</p>
              <ul>{region.cities.map((city) => <li key={city}><MapPin />{city}</li>)}</ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="coverage-note"><Database /><p>Coverage quality depends on the availability, freshness and detail of local public data. City Safety should always show what evidence supports an answer and where uncertainty remains.</p></Reveal>
      </div>
    </section>
  )
}

const principles = [
  { icon: Compass, title: 'Context before labels', copy: 'A place should never be reduced to “safe” or “dangerous.” Time, route and situation matter.' },
  { icon: Database, title: 'Evidence before confidence', copy: 'Every recommendation should show its source quality, freshness and limitations.' },
  { icon: Route, title: 'Practicality before statistics', copy: 'Travellers need a sensible next step, not a wall of numbers.' },
  { icon: HeartHandshake, title: 'Humans stay responsible', copy: 'City Safety supports judgement. It does not guarantee safety or replace local authorities.' },
]

export function Principles() {
  return (
    <section className="section principles-section">
      <div className="page-shell">
        <Reveal className="section-heading centered-heading">
          <span className="eyebrow">Product principles</span>
          <h2>Calm guidance,<br /><em>never fear.</em></h2>
        </Reveal>
        <div className="principles-grid">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <Reveal className="principle-card" delay={index * 0.06} key={principle.title}>
                <Icon />
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const benefits = [
  { icon: MoonStar, title: 'See what changes after dark', copy: 'A familiar route can feel very different depending on arrival time.' },
  { icon: Footprints, title: 'Avoid unnecessary exposure', copy: 'A five-minute alternative can create a much calmer journey.' },
  { icon: CircleCheck, title: 'Understand the recommendation', copy: 'Every warning should explain what it is based on.' },
]

export function WhyItMatters() {
  return (
    <section className="section why-section">
      <div className="why-orb" />
      <div className="page-shell why-grid">
        <Reveal className="why-title">
          <span className="eyebrow">Why this matters</span>
          <h2>A hotel can look perfect until you see the walk back <em>at night.</em></h2>
        </Reveal>
        <Reveal className="why-copy" delay={0.1}>
          <p>Travel platforms optimise for price, speed, distance and reviews. City Safety adds the missing layer: practical context for the moment between arriving and feeling settled.</p>
          <div className="benefits-list">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return <div key={benefit.title}><Icon /><span><strong>{benefit.title}</strong><small>{benefit.copy}</small></span></div>
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Transformation() {
  return (
    <section className="section transformation-section">
      <div className="page-shell">
        <Reveal className="section-heading centered-heading">
          <span className="eyebrow">Messy In → Beautiful Out</span>
          <h2>The traveller tells the story.<br /><em>City Safety finds the decision.</em></h2>
        </Reveal>
        <div className="transformation-grid">
          <Reveal className="messy-card">
            <span className="transform-card-label">The real question</span>
            <MessageCircleMore />
            <p>“We get in pretty late, maybe 10:30, two kids with us and loads of bags. Hotel says it’s close to the station but the walk looks a bit quiet? Is it actually okay or should we get a taxi?”</p>
            <small>9:32 PM</small>
          </Reveal>
          <div className="flow-arrow" aria-hidden="true"><span /><Sparkles /><ArrowRight /><span /></div>
          <Reveal className="beautiful-card" delay={0.12}>
            <span className="transform-card-label">One clear decision</span>
            <div className="beautiful-verdict"><BrandMark size="md" /><p><strong>The hotel location is workable.</strong><span>Take a taxi for the final leg after 10 pm.</span></p></div>
            <ul>
              <li><Check />Avoid two quiet side streets</li>
              <li><Check />Daytime walk is suitable</li>
              <li><Check />Keep valuables secured</li>
            </ul>
            <div className="confidence-meter"><span>Confidence · medium-high</span><i><b /></i></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-glow" />
      <Reveal className="page-shell final-cta-inner">
        <BrandMark size="lg" inverted />
        <span className="eyebrow eyebrow-light">Your calmer arrival starts here</span>
        <h2>Travel with more context.<br /><em>Move with more confidence.</em></h2>
        <p>Before you book, walk or drive, ask the question a normal map cannot answer.</p>
        <div className="hero-actions cta-actions">
          <a className="button button-ivory" href="#demo">Open the demo <ArrowRight /></a>
          <a className="button button-link-light" href="#examples">Explore example journeys <ChevronRight /></a>
        </div>
        <strong className="final-statement">Never enter a city blind.</strong>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell footer-top">
        <a className="nav-brand footer-brand" href="#top">
          <BrandMark size="sm" inverted />
          <span><strong>City Safety</strong><small>A Messy In → Beautiful Out concept by Founder Lab.</small></span>
        </a>
        <nav aria-label="Footer navigation">
          <a href="#top">Concept</a>
          <a href="#examples">Examples</a>
          <a href="#coverage">Coverage</a>
          <a href="#disclaimer">Disclaimer</a>
        </nav>
      </div>
      <div className="page-shell footer-bottom" id="disclaimer">
        <p>City Safety is a product concept and demonstration. It does not guarantee personal safety and must not replace official travel advice, emergency services or individual judgement. Prototype responses use illustrative data and scenarios.</p>
        <span>© 2026 Founder Lab</span>
      </div>
    </footer>
  )
}
