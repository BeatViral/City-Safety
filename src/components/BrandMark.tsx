import { ShieldCheck } from 'lucide-react'

type BrandMarkProps = {
  size?: 'sm' | 'md' | 'lg'
  inverted?: boolean
}

export function BrandMark({ size = 'md', inverted = false }: BrandMarkProps) {
  return (
    <span className={`brand-mark brand-mark-${size}${inverted ? ' brand-mark-inverted' : ''}`} aria-hidden="true">
      <ShieldCheck strokeWidth={1.9} />
    </span>
  )
}
