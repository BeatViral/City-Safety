import { motion, useReducedMotion } from 'framer-motion'
import { BedDouble, Info, TrainFront } from 'lucide-react'

type RouteMapProps = {
  city: string
  mapNote: string
  compact?: boolean
}

export function RouteMap({ city, mapNote, compact = false }: RouteMapProps) {
  const reduceMotion = useReducedMotion()
  const stationLabel = city === 'Paris' ? 'Gare du Nord' : `${city} arrival`

  return (
    <div className={`route-card${compact ? ' route-card-compact' : ''}`}>
      <div className="route-map">
        <span className="map-kicker">Route overview</span>
        <svg viewBox="0 0 560 290" role="img" aria-label={`Illustrative route in ${city}`}>
          <rect width="560" height="290" fill="#eeeae2" />
          <g fill="#e0ddd4" opacity="0.72">
            <rect x="18" y="16" width="100" height="50" rx="4" />
            <rect x="142" y="8" width="90" height="72" rx="4" />
            <rect x="258" y="14" width="116" height="53" rx="4" />
            <rect x="401" y="12" width="138" height="62" rx="4" />
            <rect x="10" y="96" width="75" height="66" rx="4" />
            <rect x="109" y="101" width="128" height="55" rx="4" />
            <rect x="266" y="91" width="92" height="76" rx="4" />
            <rect x="386" y="100" width="150" height="48" rx="4" />
            <rect x="17" y="192" width="123" height="78" rx="4" />
            <rect x="166" y="181" width="102" height="91" rx="4" />
            <rect x="300" y="198" width="105" height="68" rx="4" />
            <rect x="434" y="176" width="106" height="92" rx="4" />
          </g>
          <g stroke="#fff" strokeWidth="10" fill="none" opacity="0.96">
            <path d="M-20 83 L152 83 L235 135 L580 135" />
            <path d="M88 -20 L88 86 L138 158 L138 310" />
            <path d="M246 -20 L246 82 L288 135 L288 310" />
            <path d="M402 -20 L402 95 L370 164 L370 310" />
            <path d="M-20 184 L126 184 L203 164 L580 164" />
            <path d="M-20 252 L187 252 L286 226 L580 226" />
          </g>
          <path d="M323 139 L420 110 L490 174 L412 231 L300 205 Z" fill="#f3b8aa" opacity="0.5" />
          <path d="M-10 270 Q120 246 212 290" stroke="#b7ddec" strokeWidth="18" fill="none" opacity="0.95" />
          <motion.path
            d="M60 164 L132 164 L172 110 L305 110 L360 88 L456 96 L505 72"
            stroke="#2f7844"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={reduceMotion ? false : { pathLength: 0 }}
            whileInView={reduceMotion ? undefined : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.15, ease: 'easeInOut' }}
          />
          <motion.path
            d="M60 164 L130 164 L222 230 L340 172 L430 136 L505 72"
            stroke="#e34b35"
            strokeWidth="5"
            strokeDasharray="9 8"
            fill="none"
            initial={reduceMotion ? false : { pathLength: 0 }}
            whileInView={reduceMotion ? undefined : { pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.05, delay: 0.2, ease: 'easeInOut' }}
          />
          <g transform="translate(48 150)">
            <circle cx="12" cy="12" r="18" fill="#137044" />
            <circle cx="12" cy="12" r="7" fill="#fff" />
          </g>
          <g transform="translate(488 55)">
            <circle cx="17" cy="17" r="24" fill="#075d3b" />
            <path d="M8 24V10M8 17H24V24M13 11V17" stroke="#fff" strokeWidth="3" fill="none" />
          </g>
          <g transform="translate(340 173)">
            <path d="M14 0L28 25H0Z" fill="#d95847" />
            <text x="14" y="20" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="800">!</text>
          </g>
        </svg>
        <div className="station-label"><TrainFront size={13} />{stationLabel}</div>
        <div className="hotel-label"><BedDouble size={13} />Hotel</div>
        <div className="map-legend">
          <span><i className="legend-line legend-green" />Safer route (12 min)</span>
          <span><i className="legend-line legend-red" />Direct route</span>
          <span><i className="legend-block" />Extra caution</span>
        </div>
      </div>
      <div className="route-footer">
        <span><Info size={15} />{mapNote}</span>
        <time>9:33 PM</time>
      </div>
    </div>
  )
}
