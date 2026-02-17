/**
 * FeatureCard — Uses Framer Motion
 * 3D tilt on hover, scale entrance from scroll trigger
 */
import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function FeatureCard({ title, desc, index, isHero, heroTitle, heroDesc, accent, children }) {
  const [tilt, setTilt] = React.useState({ rotateX: 0, rotateY: 0 });

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTilt({
      rotateX: (y - rect.height / 2) / 18,
      rotateY: (rect.width / 2 - x) / 18,
    });
  };

  const reset = () => setTilt({ rotateX: 0, rotateY: 0 });

  if (isHero) {
    return (
      <motion.div
        className="fcard fcard--hero"
        custom={0}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={{ ...heroCardStyle, perspective: 1000, rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
      >
        <div className="fcard__visual" style={{ ...visualStyle, borderColor: accent + '22' }}>
          {children}
        </div>
        <div className="fcard__body" style={heroBodyStyle}>
          <h3 style={h3Style}>{heroTitle}</h3>
          <p style={pStyle}>{heroDesc}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fcard"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
      style={{
        ...cardStyle,
        perspective: 1000,
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
    >
      <div style={iconStyle}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <h3 style={h3Style}>{title}</h3>
      <p style={pStyle}>{desc}</p>
    </motion.div>
  );
}

const cardStyle = {
  background: 'var(--bg-card)', border: '1px solid var(--border)',
  borderRadius: 16, padding: '2rem', cursor: 'default',
};
const heroCardStyle = {
  background: 'var(--bg-card)', border: '1px solid var(--border)',
  borderRadius: 16, display: 'grid', gridTemplateColumns: '1.2fr 1fr',
  overflow: 'hidden', gridColumn: '1 / -1',
};
const visualStyle = {
  padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
  minHeight: 280, borderRight: '1px solid var(--border)',
};
const heroBodyStyle = { padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
const iconStyle = {
  width: 44, height: 44, borderRadius: 12,
  background: 'rgba(255,255,255,.05)', display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  color: 'var(--text-muted)', marginBottom: '1.25rem',
};
const h3Style = { fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '.6rem' };
const pStyle = { fontSize: '.9rem', color: 'var(--text-muted)', lineHeight: 1.6 };
