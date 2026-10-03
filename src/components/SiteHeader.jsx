import { useState } from 'react';
import BrandMark from './BrandMark.jsx';

const links = [
  { label: 'Our story', href: '#story' },
  { label: 'Learning', href: '#learning' },
  { label: 'Life at Tulas', href: '#life' },
];

export default function SiteHeader({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandMark />
        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="site-nav__mobile-cta" href="#admissions" onClick={closeMenu}>
            Explore admissions <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <div className="site-header__actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            <span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span>
          </button>
          <a className="button button--small button--dark header-cta" href="#admissions">
            Enquire now <span aria-hidden="true">↗</span>
          </a>
          <button
            className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
