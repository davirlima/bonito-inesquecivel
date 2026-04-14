import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

/* ============================================================
   FOOTER — logo + links rápidos + copyright
   ============================================================ */
export default function Footer() {
  const anoAtual = new Date().getFullYear()

  const linkGroups = [
    {
      titulo: 'Passeios',
      links: [
        { label: 'Natureza', href: '#destinos' },
        { label: 'Aventura', href: '#destinos' },
        { label: 'Ecoturismo', href: '#destinos' },
        { label: 'Fauna & Flora', href: '#destinos' },
      ],
    },
    {
      titulo: 'Hospedagem',
      links: [
        { label: 'Lodges', href: '#destinos' },
        { label: 'Hotéis', href: '#destinos' },
        { label: 'Pousadas', href: '#destinos' },
      ],
    },
    {
      titulo: 'Portal',
      links: [
        { label: 'Início', href: '#inicio' },
        { label: 'Sobre Bonito', href: '#sobre' },
      ],
    },
  ]

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.inner}>
        {/* Topo do footer */}
        <div className={styles.top}>
          {/* Identidade */}
          <div className={styles.brand}>
            <div className={styles.logosContainer}>
              <Link to="/" className={styles.logo}>
                <img src="/logo-2.webp" alt="Bonito & Pantanal Sul" className={styles.logoImage} />
              </Link>
              <img src="/jh-marketing-turistico.png" alt="JH Marketing Turístico" className={`${styles.logoImage} ${styles.jhFilter}`} />
            </div>
            <p className={styles.tagline}>
              O portal definitivo do ecoturismo em Bonito-MS e Pantanal.
              Natureza, aventura e hospitalidade em cada experiência.
            </p>

          </div>

          {/* Links agrupados */}
          <div className={styles.linksGrid}>
            {linkGroups.map(group => (
              <div key={group.titulo} className={styles.linkGroup}>
                <h4 className={styles.groupTitle}>{group.titulo}</h4>
                <ul>
                  {group.links.map(link => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.footerLink}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divisor */}
        <hr className={styles.divider} />

        {/* Rodapé do footer */}
        <div className={styles.bottom}>
          <div className={styles.bottomMeta}>
            <p className={styles.copyright}>
              © {anoAtual} Bonito Inesquecível Oficial. Todos os direitos reservados.
            </p>
            <p className={styles.credits}>
              Feito com ♥ para o Pantanal · Bonito, MS
            </p>
          </div>
          <div className={styles.bottomContact}>
            <a href="mailto:bonitoinesquecivel@gmail.com" className={styles.emailLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              bonitoinesquecivel@gmail.com
            </a>
            <div className={styles.whatsappWrapper}>
              <img src="/jh-marketing-turistico.png" alt="JH Marketing Turístico" className={styles.jhLogo} />
              <a href={`https://wa.me/5567992834917?text=${encodeURIComponent('Olá! Vim pelo site Bonito Inesquecível e gostaria de entrar em contato.')}`} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                (67) 99283-4917
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
