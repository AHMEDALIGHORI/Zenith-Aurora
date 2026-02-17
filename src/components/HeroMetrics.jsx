/**
 * HeroMetrics — Uses React Spring (physics-based animation)
 * Animates counter numbers with spring physics for a natural, bouncy feel
 * instead of linear time-based tweening.
 */
import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const METRICS = [
  { target: 150, suffix: '+', label: 'New Features' },
  { target: 12, suffix: '', label: 'Categories' },
  { target: 3, suffix: 'x', label: 'Faster Performance' },
];

function AnimatedCounter({ target, suffix, label, delay }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  /* React Spring — spring physics on the number */
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? target : 0 },
    config: { ...config.molasses, tension: 60, friction: 14 },
  });

  /* React Spring — fade + slide entrance */
  const entrance = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0px)' : 'translateY(30px)' },
    config: config.gentle,
  });

  return (
    <animated.div style={{ ...entrance, textAlign: 'center' }}>
      <div style={styles.numRow}>
        <animated.span style={styles.number}>
          {number.to((n) => Math.floor(n))}
        </animated.span>
        <span style={styles.suffix}>{suffix}</span>
      </div>
      <span style={styles.label}>{label}</span>
    </animated.div>
  );
}

export default function HeroMetrics() {
  return (
    <div style={styles.wrap}>
      {METRICS.map((m, i) => (
        <AnimatedCounter key={m.label} {...m} delay={600 + i * 200} />
      ))}
    </div>
  );
}

const styles = {
  wrap: {
    display: 'flex', gap: '4rem', justifyContent: 'center', flexWrap: 'wrap',
  },
  numRow: { display: 'flex', alignItems: 'baseline', justifyContent: 'center' },
  number: {
    fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800,
    background: 'linear-gradient(135deg, #fafafa, #a1a1aa)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  },
  suffix: {
    fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800,
    background: 'linear-gradient(135deg, #7c5cfc, #fc5c8c)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  },
  label: { display: 'block', fontSize: '.8rem', color: '#52525b', marginTop: '.25rem' },
};
