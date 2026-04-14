import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

/* ============================================================
   HEADER — logo + navegação com scroll suave
   ============================================================ */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  /* Adiciona sombra ao header após scroll de 60px */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Fecha menu mobile ao redimensionar para desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { label: 'Início',    href: '#inicio' },
    { label: 'Destinos',  href: '#destinos' },
    { label: 'Sobre',     href: '#sobre' },
  ]

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logos */}
        <div className={styles.logosContainer}>
          <Link to="/" className={styles.logo} aria-label="Bonito Inesquecível Oficial — Home">
            <img src="/logo-2.webp" alt="Bonito & Pantanal Sul" className={styles.logoImage} />
          </Link>
          <img src="/jh-marketing-turistico.png" alt="JH Marketing Turístico" className={`${styles.logoImage} ${styles.jhFilter}`} />
        </div>

        {/* Nav desktop */}
        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão mobile hamburger */}
        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Nav mobile (dropdown) */}
      <nav
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
