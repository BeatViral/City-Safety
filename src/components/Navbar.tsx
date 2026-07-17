import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { BrandMark } from './BrandMark'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Examples', href: '#examples' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Open demo', href: '#demo' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="page-shell nav-inner">
        <a className="nav-brand" href="#top" aria-label="City Safety home">
          <BrandMark size="sm" />
          <span>
            <strong>City Safety</strong>
            <small>Messy In → Beautiful Out</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <a className="button button-small button-primary" href="#demo">Try a travel question</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="page-shell mobile-nav-inner">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
              ))}
              <a className="button button-primary" href="#demo" onClick={() => setOpen(false)}>Try a travel question</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
