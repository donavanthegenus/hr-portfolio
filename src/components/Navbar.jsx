import { useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          Donavan Jax Thegenus
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.linkedin.com/in/donavanthegenus/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
