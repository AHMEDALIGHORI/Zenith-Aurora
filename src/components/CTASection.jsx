import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './CTASection.css';

export default function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section ref={ref} className="cta">
      <motion.div className="cta-orb cta-orb--1" style={{ y: y1 }} />
      <motion.div className="cta-orb cta-orb--2" style={{ y: y2 }} />

      <motion.div className="cta-inner" style={{ scale }}>
        <motion.p
          className="cta-kicker"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to transform your workflow?
        </motion.p>

        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experience the <span className="cta-gradient">Aurora Edition</span>
        </motion.h2>

        <motion.p
          className="cta-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join thousands of teams already building the future. Get early access to
          every feature in the Aurora Edition — free for 90 days.
        </motion.p>

        <motion.div
          className="cta-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <motion.button
            className="btn btn--primary btn--lg"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Early Access
          </motion.button>
          <motion.button
            className="btn btn--ghost btn--lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View Pricing
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
