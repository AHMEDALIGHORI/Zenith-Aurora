/**
 * Header — Uses Framer Motion + React Transition Group
 * Framer Motion: header slide-in, magnetic button effect
 * React Transition Group: nav link active-state CSS transitions on mount/unmount
 */
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { SECTIONS } from '../data/sections';
import './Header.css';

export default function Header({ visible }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      // determine active section
      let current = '';
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop - 200;
          if (window.scrollY >= top && window.scrollY < top + el.offsetHeight) {
            current = s.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="header__inner">
        <a className="logo" href="#">
          <span className="logo__mark">Z</span>
          <span className="logo__text">Zenith</span>
        </a>

        <nav className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`}>
          {/* TransitionGroup manages enter/leave classes for active indicator */}
          <TransitionGroup component={null}>
            {SECTIONS.map((s) => (
              <CSSTransition key={s.id} timeout={300} classNames="nav-item">
                <button
                  className={`nav-link ${activeSection === s.id ? 'nav-link--active' : ''}`}
                  onClick={() => scrollTo(s.id)}
                >
                  {s.title}
                </button>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </nav>

        <MagneticButton>
          <a href="#" className="btn btn-primary header__cta">Get Early Access</a>
        </MagneticButton>

        <button className={`mobile-toggle ${mobileOpen ? 'mobile-toggle--open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </motion.header>
  );
}

/* Magnetic button — Framer Motion useMotionValue */
function MagneticButton({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.div style={{ x, y, display: 'inline-flex' }} onMouseMove={handleMouse} onMouseLeave={reset}>
      {children}
    </motion.div>
  );
}
