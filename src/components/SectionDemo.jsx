/**
 * SectionDemo — Per-section visual demos
 * Uses React Move (data-driven animation) for the Analytics chart
 * Uses Framer Motion for other interactive demos
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Animate } from 'react-move';
import { interpolate } from 'd3-interpolate';
import './SectionDemo.css';

export default function SectionDemo({ sectionId, accent }) {
  switch (sectionId) {
    case 'ai-copilot': return <AIChatDemo accent={accent} />;
    case 'workflows': return <WorkflowDemo accent={accent} />;
    case 'canvas': return <CanvasDemo />;
    case 'analytics': return <AnalyticsDemo accent={accent} />;
    case 'collaborate': return <CollabDemo />;
    case 'integrations': return <IntegrationsDemo accent={accent} />;
    case 'security': return <SecurityDemo />;
    case 'mobile': return <MobileDemo accent={accent} />;
    case 'api': return <CodeDemo />;
    case 'enterprise': return <EnterpriseDemo accent={accent} />;
    default: return null;
  }
}

/* ─── AI Chat ─── Framer Motion with AnimatePresence */
function AIChatDemo() {
  const [showReply, setShowReply] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShowReply(true), 1500); return () => clearTimeout(t); }, []);

  return (
    <div className="demo-ai">
      <motion.div className="ai-msg ai-msg--user" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
        Design a landing page for our new product
      </motion.div>
      <AnimatePresence>
        {showReply && (
          <motion.div className="ai-msg ai-msg--bot" initial={{ opacity: 0, x: -20, height: 0 }} animate={{ opacity: 1, x: 0, height: 'auto' }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
            <div className="ai-typing"><span /><span /><span /></div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              I've analyzed your brand guidelines and created 3 variations. Each optimizes for conversion based on your audience data...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Workflow Pipeline ─── Framer Motion stagger */
function WorkflowDemo() {
  const nodes = ['New Upload', 'AI Review', 'Auto-Deploy', 'Notify Team'];
  const colors = ['#5cf0b8', '#5ca0fc', '#5ca0fc', '#fc5c8c'];

  return (
    <div className="demo-workflow">
      {nodes.map((n, i) => (
        <React.Fragment key={n}>
          <motion.div className="wf-node"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
          >
            <span className="wf-dot" style={{ background: colors[i], boxShadow: `0 0 8px ${colors[i]}80` }} />
            <span>{n}</span>
          </motion.div>
          {i < nodes.length - 1 && <div className="wf-line" />}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ─── Canvas ─── Framer Motion drag */
function CanvasDemo() {
  return (
    <div className="demo-canvas">
      <div className="cv-toolbar">
        {[1,2,3,4,5].map(i => <div key={i} className={`cv-tool ${i===1?'cv-tool--active':''}`} />)}
      </div>
      <div className="cv-artboard">
        <motion.div className="cv-shape cv-rect" drag dragConstraints={{ left: -50, right: 100, top: -40, bottom: 60 }} whileDrag={{ scale: 1.05 }} />
        <motion.div className="cv-shape cv-circle" drag dragConstraints={{ left: -80, right: 80, top: -50, bottom: 50 }} whileDrag={{ scale: 1.1 }} />
        <div className="cv-text">Aa</div>
      </div>
    </div>
  );
}

/* ─── Analytics Chart ─── REACT MOVE (data-driven animation) */
function AnalyticsDemo({ accent }) {
  const [data, setData] = useState([40, 65, 45, 80, 55, 90, 70]);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 400);
    // Cycle data for demo
    const interval = setInterval(() => {
      setData(prev => prev.map(() => 20 + Math.random() * 75));
    }, 3000);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  return (
    <div className="demo-analytics">
      <div className="chart-bars">
        {data.map((val, i) => (
          /* React Move — Animate each bar's height with d3-interpolate */
          <Animate
            key={i}
            start={{ height: 0 }}
            update={{
              height: [inView ? val : 0],
              timing: { duration: 800, delay: i * 100 },
            }}
            interpolation={(begVal, endVal) => interpolate(begVal, endVal)}
          >
            {({ height }) => (
              <div
                className="chart-bar"
                style={{
                  height: `${height}%`,
                  background: `linear-gradient(to top, ${accent}50, ${accent}15)`,
                  border: `1px solid ${accent}35`,
                  borderBottom: 'none',
                }}
              />
            )}
          </Animate>
        ))}
      </div>
    </div>
  );
}

/* ─── Collaborate ─── Framer Motion layout + animate */
function CollabDemo() {
  const avatars = [
    { name: 'A', color: '#7c5cfc' },
    { name: 'M', color: '#fc5c8c' },
    { name: 'K', color: '#5cf0b8' },
    { name: 'R', color: '#fca95c' },
  ];

  return (
    <div className="demo-collab">
      <div className="collab-avatars">
        {avatars.map((a, i) => (
          <motion.div key={a.name} className="collab-avatar"
            style={{ background: a.color, marginLeft: i > 0 ? -8 : 0 }}
            initial={{ scale: 0 }} whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
          >{a.name}</motion.div>
        ))}
      </div>
      <div className="collab-cursors">
        <motion.div className="collab-cursor" style={{ color: '#7c5cfc' }}
          animate={{ x: [0, 40, 20, 0], y: [0, -15, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16"><path d="M0 0L16 6L8 8L6 16Z" fill="currentColor" /></svg>
          <span style={{ background: '#7c5cfc' }}>Alice</span>
        </motion.div>
        <motion.div className="collab-cursor collab-cursor--2" style={{ color: '#fc5c8c' }}
          animate={{ x: [0, -30, -10, 0], y: [0, 20, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16"><path d="M0 0L16 6L8 8L6 16Z" fill="currentColor" /></svg>
          <span style={{ background: '#fc5c8c' }}>Max</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Integrations ─── Framer Motion rotate */
function IntegrationsDemo({ accent }) {
  const items = ['Sl', 'Gh', 'Fg', 'Nr', 'Jr', 'Dr', 'Nt', 'Vs'];

  return (
    <div className="demo-integrations">
      <div className="hub-center">Z</div>
      <motion.div className="hub-orbit"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        {items.map((item, i) => {
          const angle = (360 / items.length) * i;
          const rad = (angle * Math.PI) / 180;
          const r = 90;
          return (
            <motion.div key={item} className="orbit-item"
              style={{ left: 110 + r * Math.cos(rad), top: 110 + r * Math.sin(rad) }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            >{item}</motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ─── Security ─── Framer Motion SVG path draw */
function SecurityDemo() {
  return (
    <div className="demo-security">
      <svg viewBox="0 0 80 96" width="80" height="96" fill="none" style={{ color: '#5cfcce' }}>
        <motion.path
          d="M40 4L4 20v28c0 24.4 15.36 47.2 36 52 20.64-4.8 36-27.6 36-52V20L40 4z"
          stroke="currentColor" strokeWidth="2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M28 48l8 8 16-16"
          stroke="currentColor" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }} transition={{ delay: 1.5, duration: 0.6 }}
        />
      </svg>
      <div className="sec-badges">
        {['SOC 2', 'GDPR', 'ISO 27001'].map((b, i) => (
          <motion.span key={b} className="sec-badge"
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 2 + i * 0.15 }}
          >{b}</motion.span>
        ))}
      </div>
    </div>
  );
}

/* ─── Mobile ─── Framer Motion */
function MobileDemo({ accent }) {
  return (
    <div className="demo-mobile">
      <motion.div className="phone"
        initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-hdr"><span>Zenith</span><span>•••</span></div>
          <div className="phone-body">
            <motion.div className="phone-card" style={{ background: `${accent}18`, borderColor: `${accent}30` }}
              initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.3, type: 'spring' }}
            />
            <motion.div className="phone-card phone-card--sm" style={{ background: `${accent}18`, borderColor: `${accent}30` }}
              initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.45, type: 'spring' }}
            />
            <motion.div className="phone-card phone-card--sm" style={{ background: `${accent}18`, borderColor: `${accent}30` }}
              initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.6, type: 'spring' }}
            />
          </div>
          <div className="phone-nav">{'□ ○ △ ☆'.split(' ').map(s => <span key={s}>{s}</span>)}</div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Code / API ─── Framer Motion typewriter */
function CodeDemo() {
  const lines = [
    { cls: 'kw', text: 'const ' }, { cls: '', text: 'zenith = ' }, { cls: 'fn', text: 'require' }, { cls: 'str', text: "('@zenith/sdk')" }, { cls: '', text: ';' },
  ];

  return (
    <div className="demo-code">
      <div className="code-win">
        <div className="code-dots"><span /><span /><span /></div>
        <pre className="code-block">
          <code>
            <span className="code-kw">const</span> zenith = <span className="code-fn">require</span>(<span className="code-str">'@zenith/sdk'</span>);{'\n\n'}
            <span className="code-kw">const</span> project = <span className="code-kw">await</span> zenith{'\n'}
            {'  '}.<span className="code-fn">projects</span>.<span className="code-fn">create</span>({'{\n'}
            {'    '}<span className="code-prop">name</span>: <span className="code-str">'Aurora Demo'</span>,{'\n'}
            {'    '}<span className="code-prop">template</span>: <span className="code-str">'saas-landing'</span>{'\n'}
            {'  }'});{'\n\n'}
            <span className="code-comment">{'// Deploy in one line'}</span>{'\n'}
            <span className="code-kw">await</span> project.<span className="code-fn">deploy</span>();
          </code>
        </pre>
      </div>
    </div>
  );
}

/* ─── Enterprise Globe ─── Framer Motion */
function EnterpriseDemo({ accent }) {
  return (
    <div className="demo-enterprise">
      {[0, 20, 40].map((inset, i) => (
        <motion.div key={i} className="globe-ring"
          style={{ inset, borderColor: `${accent}25` }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
        />
      ))}
      {[
        { top: '30%', left: '20%' }, { top: '15%', right: '30%' },
        { top: '55%', left: '45%' }, { bottom: '25%', left: '25%' },
        { bottom: '30%', right: '20%' },
      ].map((pos, i) => (
        <motion.div key={i} className="globe-dot" style={{ ...pos, background: accent, boxShadow: `0 0 12px ${accent}80` }}
          animate={{ opacity: [1, 0.3, 1], scale: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
        />
      ))}
    </div>
  );
}
