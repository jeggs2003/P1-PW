import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

const links = [
  { label: 'Inicio',         href: '/#inicio' },
  { label: 'Servicios',      href: '/#servicios' },
  { label: 'Cobertura',      href: '/#cobertura' },
  { label: 'Cómo funciona',  href: '/#como-funciona' },
  { label: 'Sobre nosotros', href: '/#sobre-nosotros' },
  { label: 'FAQ',            href: '/#faq' },
  { label: 'Contacto',       href: '/#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [pendingId, setPendingId] = useState(null)
  const location  = useLocation()
  const navigate  = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    if (location.pathname === '/' && pendingId) {
      setTimeout(() => {
        const el = document.getElementById(pendingId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setPendingId(null)
      }, 100)
    }
  }, [location.pathname, pendingId])

  const handleAnchor = (e, href) => {
    if (!href.startsWith('/#')) return
    e.preventDefault()
    const id = href.replace('/#', '')

    if (location.pathname === '/') {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      setPendingId(id)
      navigate('/')
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">✈</span>
          <span>Aero<strong>Paq</strong></span>
        </Link>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleAnchor(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <Link to="/cotizador" className="navbar__cta">
            Cotizar envío
          </Link>
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}