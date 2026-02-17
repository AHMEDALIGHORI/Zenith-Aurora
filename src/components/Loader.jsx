/**
 * Loader — Uses Lottie + Framer Motion
 * Lottie renders the spinner animation (exported from After Effects JSON)
 * Framer Motion handles the exit animation of the entire overlay
 */
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import { LOADER_ANIMATION } from '../data/sections';

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          style={styles.overlay}
        >
          <div style={styles.inner}>
            {/* Lottie animation for the spinner */}
            <div style={styles.lottieWrap}>
              <Lottie
                animationData={LOADER_ANIMATION}
                loop
                style={{ width: 80, height: 80 }}
              />
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
              style={styles.bar}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={styles.text}
            >
              Loading Aurora Edition...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 10000,
    background: '#09090b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
  },
  lottieWrap: {
    filter: 'drop-shadow(0 0 20px rgba(124,92,252,0.4))',
  },
  bar: {
    width: 180,
    height: 3,
    borderRadius: 3,
    background: 'linear-gradient(90deg, #7c5cfc, #fc5c8c)',
    transformOrigin: 'left',
  },
  text: {
    fontFamily: 'var(--font)',
    fontSize: '0.75rem',
    color: '#52525b',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
};
