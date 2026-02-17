export const SECTIONS = [
  {
    id: 'ai-copilot',
    num: '01',
    title: 'AI CoPilot',
    accent: '#7c5cfc',
    subtitle: 'Your intelligent creative partner that understands context, anticipates needs, and generates solutions before you even ask.',
    features: [
      { title: 'Multi-Modal Generation', desc: 'Generate copy, images, layouts, and code — all from natural language prompts.' },
      { title: 'Real-Time Adaptation', desc: 'Learns from your edits in real-time, getting smarter with every interaction.' },
      { title: 'Code Aware', desc: 'Understands your codebase and can implement changes across your entire project.' },
    ],
    hero: {
      title: 'Contextual Intelligence',
      desc: 'Understands your entire project history, brand guidelines, and team preferences to deliver hyper-relevant suggestions.',
    },
  },
  {
    id: 'workflows',
    num: '02',
    title: 'Workflows',
    accent: '#fc5c8c',
    subtitle: 'Automate the mundane. Orchestrate the complex. Build powerful automation pipelines with zero code.',
    features: [
      { title: 'Lightning Triggers', desc: 'React to events in milliseconds with our edge-first automation engine.' },
      { title: 'Smart Templates', desc: 'Start with 200+ pre-built workflow templates for common scenarios.' },
      { title: 'Audit Logs', desc: 'Complete transparency with detailed logs for every workflow execution.' },
    ],
    hero: {
      title: 'Visual Pipeline Builder',
      desc: 'Drag, drop, and connect nodes to create complex automation workflows that run 24/7.',
    },
  },
  {
    id: 'canvas',
    num: '03',
    title: 'Canvas',
    accent: '#5cf0b8',
    subtitle: 'An infinite workspace where ideas come to life. Design, prototype, and ship — all in one place.',
    features: [
      { title: 'Smart Layouts', desc: 'AI-powered auto-layout that adapts to your content and design system.' },
      { title: 'Vector Engine', desc: 'Sub-pixel precision with GPU-accelerated rendering at any zoom level.' },
      { title: 'Export Anything', desc: 'Export to any format — SVG, PNG, PDF, code, or directly to production.' },
    ],
    hero: {
      title: 'Infinite Canvas',
      desc: 'No boundaries. Zoom from pixel-perfect details to bird\'s-eye architecture views seamlessly.',
    },
  },
  {
    id: 'analytics',
    num: '04',
    title: 'Analytics',
    accent: '#fca95c',
    subtitle: 'See the unseen. AI-powered analytics that surface insights, predict trends, and guide decisions in real time.',
    features: [
      { title: 'Real-Time Metrics', desc: 'Live dashboards with sub-second data refresh and anomaly detection.' },
      { title: 'Trend Spotting', desc: 'AI identifies emerging patterns before they become obvious.' },
      { title: 'Custom Reports', desc: 'Build beautiful reports with drag-and-drop and share with one click.' },
    ],
    hero: {
      title: 'Predictive Dashboards',
      desc: 'Don\'t just track what happened — know what\'s about to happen with ML-powered forecasting.',
    },
  },
  {
    id: 'collaborate',
    num: '05',
    title: 'Collaborate',
    accent: '#5ca0fc',
    subtitle: 'Work together like you\'re in the same room, even when you\'re worlds apart. Real-time multiplayer for every tool.',
    features: [
      { title: 'Threaded Comments', desc: 'Contextual discussions pinned to any element, with @mentions and reactions.' },
      { title: 'Team Spaces', desc: 'Organize projects by team with granular permissions and shared assets.' },
      { title: 'Global CDN', desc: 'Edge-distributed collaboration nodes ensure snappy performance worldwide.' },
    ],
    hero: {
      title: 'Multiplayer Editing',
      desc: 'See everyone\'s cursors, selections, and changes in real-time with zero latency.',
    },
  },
  {
    id: 'integrations',
    num: '06',
    title: 'Integrations',
    accent: '#e85cfc',
    subtitle: 'Connect everything. 500+ integrations that bring your favorite tools into one unified workspace.',
    features: [
      { title: 'Webhooks', desc: 'Send and receive data from any service with custom webhook endpoints.' },
      { title: 'Data Sync', desc: 'Bi-directional sync keeps all your tools in perfect harmony automatically.' },
      { title: 'Plugin SDK', desc: 'Build your own integrations with our powerful SDK and marketplace.' },
    ],
    hero: {
      title: 'Integration Hub',
      desc: 'One-click connections to Slack, GitHub, Figma, Notion, Jira, and 500+ more.',
    },
  },
  {
    id: 'security',
    num: '07',
    title: 'Security',
    accent: '#5cfcce',
    subtitle: 'Enterprise-grade security that never gets in your way. SOC 2, GDPR, and zero-trust — built in, not bolted on.',
    features: [
      { title: 'E2E Encryption', desc: 'End-to-end encryption for all data — at rest, in transit, and in use.' },
      { title: 'SSO & SCIM', desc: 'Single sign-on with SAML/OIDC and automated user provisioning.' },
      { title: 'Audit Everything', desc: 'Complete audit trail with immutable logs and real-time alerting.' },
    ],
    hero: {
      title: 'Zero-Trust Architecture',
      desc: 'Every request is verified. Every connection is encrypted. Every access is logged.',
    },
  },
  {
    id: 'mobile',
    num: '08',
    title: 'Mobile',
    accent: '#fc8c5c',
    subtitle: 'The full power of Zenith in your pocket. A native mobile experience that doesn\'t compromise on features.',
    features: [
      { title: 'Offline Mode', desc: 'Full functionality offline with intelligent sync when you reconnect.' },
      { title: 'Camera Integration', desc: 'Scan, capture, and import assets directly from your device camera.' },
      { title: 'Smart Notifications', desc: 'AI-prioritized alerts so you never miss what matters.' },
    ],
    hero: {
      title: 'Native Performance',
      desc: 'Built with native frameworks for buttery-smooth 120fps performance on iOS and Android.',
    },
  },
  {
    id: 'api',
    num: '09',
    title: 'API',
    accent: '#a8fc5c',
    subtitle: 'Build anything on Zenith. A powerful, well-documented API that developers actually enjoy using.',
    features: [
      { title: 'GraphQL & REST', desc: 'Choose your style — both are first-class citizens with full feature parity.' },
      { title: 'Rate Limit? What Rate Limit?', desc: '10,000 req/sec on the free tier. Unlimited on Enterprise.' },
      { title: 'Interactive Docs', desc: 'Try every endpoint live in our docs — no API key required for exploration.' },
    ],
    hero: {
      title: 'Developer-First SDK',
      desc: 'Type-safe SDKs for JavaScript, Python, Go, and Rust with auto-generated from our OpenAPI spec.',
    },
  },
  {
    id: 'enterprise',
    num: '10',
    title: 'Enterprise',
    accent: '#fcdc5c',
    subtitle: 'Scale without limits. Dedicated infrastructure, premium support, and custom SLAs for the world\'s largest teams.',
    features: [
      { title: 'Unlimited Seats', desc: 'No per-seat pricing. Add your entire organization at one flat rate.' },
      { title: '24/7 Premium Support', desc: 'Dedicated success manager and priority support with 15-min response time.' },
      { title: 'Custom Compliance', desc: 'HIPAA, FedRAMP, and custom compliance frameworks on request.' },
    ],
    hero: {
      title: 'Global Infrastructure',
      desc: 'Deploy to 30+ regions with automatic failover and 99.999% uptime SLA.',
    },
  },
];

/* Lottie-style animation data (minimal loader) */
export const LOADER_ANIMATION = {
  v: "5.7.4", fr: 30, ip: 0, op: 60, w: 200, h: 200,
  assets: [],
  layers: [{
    ddd: 0, ind: 1, ty: 4, nm: "circle",
    sr: 1, ks: {
      o: { a: 1, k: [{ t: 0, s: [100] }, { t: 30, s: [40] }, { t: 60, s: [100] }] },
      r: { a: 1, k: [{ t: 0, s: [0] }, { t: 60, s: [360] }] },
      p: { a: 0, k: [100, 100, 0] },
      a: { a: 0, k: [0, 0, 0] },
      s: { a: 1, k: [{ t: 0, s: [100, 100, 100] }, { t: 30, s: [120, 120, 100] }, { t: 60, s: [100, 100, 100] }] }
    },
    shapes: [{
      ty: "el", d: 1, s: { a: 0, k: [60, 60] }, p: { a: 0, k: [0, 0] },
    }, {
      ty: "st", c: { a: 0, k: [0.486, 0.361, 0.988, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 3 },
      lc: 2, lj: 1, d: [{ n: "d", nm: "dash", v: { a: 0, k: 40 } }, { n: "g", nm: "gap", v: { a: 0, k: 80 } }, { n: "o", nm: "offset", v: { a: 1, k: [{ t: 0, s: [0] }, { t: 60, s: [120] }] } }]
    }],
    ip: 0, op: 60, st: 0,
  }]
};
