import styles from './Projects.module.css'

const chatbotTags = ['React', 'Node.js', 'Claude API', 'RAG', 'Vercel']
const dashboardTags = ['React', 'Node.js', 'Recharts', 'Anthropic Claude API']

function BrowserChrome({ url }) {
  return (
    <div className={styles.browserChrome}>
      <div className={styles.browserDots}>
        <span className={styles.browserDot} style={{ background: '#ff5f57' }} />
        <span className={styles.browserDot} style={{ background: '#ffbd2e' }} />
        <span className={styles.browserDot} style={{ background: '#28c840' }} />
      </div>
      <div className={styles.browserUrl}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <rect x="3" y="11" width="18" height="11" rx="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        {url}
      </div>
    </div>
  )
}

function DashboardPreviewScreen() {
  const kpis = [
    { label: 'Turnover Rate', val: '8.4%', color: '#f97316' },
    { label: 'Retention', val: '91.6%', color: '#22c55e' },
    { label: 'Time-to-Fill', val: '27d', color: '#3b82f6' },
    { label: 'Satisfaction', val: '7.8 / 10', color: '#a78bfa' },
    { label: 'Headcount', val: '1,247', color: '#06b6d4' },
    { label: 'eNPS Score', val: '+32', color: '#4ade80' },
  ]
  const bars = [
    { h: 38, c: '#3b82f6' }, { h: 52, c: '#8b5cf6' }, { h: 30, c: '#06b6d4' },
    { h: 47, c: '#3b82f6' }, { h: 40, c: '#8b5cf6' }, { h: 56, c: '#06b6d4' },
  ]
  return (
    <div className={styles.previewScreen} style={{ background: '#080c14' }}>
      {/* Simulated header */}
      <div style={{ height: 44, background: '#0b1120', borderBottom: '1px solid rgba(148,163,184,0.07)', display: 'flex', alignItems: 'center', padding: '0 18px', gap: 10 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6', flexShrink: 0 }} />
        <div style={{ width: 110, height: 7, borderRadius: 4, background: 'rgba(148,163,184,0.18)' }} />
        <div style={{ flex: 1 }} />
        <div style={{ width: 54, height: 22, borderRadius: 6, background: 'rgba(148,163,184,0.05)', border: '1px solid rgba(148,163,184,0.1)' }} />
        <div style={{ width: 76, height: 22, borderRadius: 6, background: 'rgba(148,163,184,0.05)', border: '1px solid rgba(148,163,184,0.1)' }} />
      </div>

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 7, padding: '12px 18px 0' }}>
        {kpis.map(k => (
          <div key={k.label} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(148,163,184,0.06)', borderRadius: 8, padding: '8px 10px' }}>
            <div style={{ fontSize: 8, color: 'rgba(148,163,184,0.45)', marginBottom: 5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'Inter, sans-serif' }}>{k.label}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: k.color, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>{k.val}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 7, padding: '7px 18px' }}>
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(148,163,184,0.06)', borderRadius: 10, padding: '10px 14px' }}>
          <div style={{ width: 120, height: 6, borderRadius: 3, background: 'rgba(148,163,184,0.15)', marginBottom: 10 }} />
          <svg width="100%" height="64" viewBox="0 0 320 64" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 48 C25 46 45 54 75 40 S125 24 160 30 S210 44 245 32 S280 16 320 20" fill="none" stroke="#3b82f6" strokeWidth="1.8" />
            <path d="M0 48 C25 46 45 54 75 40 S125 24 160 30 S210 44 245 32 S280 16 320 20 L320 64 L0 64 Z" fill="url(#lg1)" />
          </svg>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(148,163,184,0.06)', borderRadius: 10, padding: '10px 14px' }}>
          <div style={{ width: 80, height: 6, borderRadius: 3, background: 'rgba(148,163,184,0.15)', marginBottom: 10 }} />
          <svg width="100%" height="64" viewBox="0 0 148 64">
            {bars.map((b, i) => (
              <rect key={i} x={i * 22 + 4} y={64 - b.h} width="15" height={b.h} rx="3" fill={b.c} opacity="0.65" />
            ))}
          </svg>
        </div>
      </div>

      {/* Action row */}
      <div style={{ padding: '6px 18px 14px', display: 'flex', gap: 8 }}>
        <div style={{ height: 28, width: 116, borderRadius: 8, background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 100%)', border: '1px solid rgba(59,130,246,0.18)' }} />
        <div style={{ height: 28, width: 84, borderRadius: 8, background: 'rgba(148,163,184,0.04)', border: '1px solid rgba(148,163,184,0.08)' }} />
      </div>
    </div>
  )
}

function ChatbotPreviewScreen() {
  return (
    <div className={styles.previewScreen} style={{ background: '#0a0a0f' }}>
      {/* Chat header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(108,99,255,0.18)', border: '1px solid rgba(108,99,255,0.28)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(108,99,255,0.9)">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
        <div>
          <div style={{ width: 82, height: 7, borderRadius: 3, background: 'rgba(240,240,245,0.25)', marginBottom: 6 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px rgba(74,222,128,0.7)' }} />
            <div style={{ width: 96, height: 5, borderRadius: 3, background: 'rgba(148,163,184,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* User */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#6c63ff', borderRadius: '14px 4px 14px 14px', padding: '9px 14px', maxWidth: '72%' }}>
            <div style={{ width: 138, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.5)', marginBottom: 5 }} />
            <div style={{ width: 88, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.35)' }} />
          </div>
        </div>
        {/* Bot */}
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.22)', flexShrink: 0 }} />
          <div style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px 14px 14px 14px', padding: '9px 14px', maxWidth: '82%' }}>
            <div style={{ width: '92%', height: 6, borderRadius: 3, background: 'rgba(148,163,184,0.2)', marginBottom: 5 }} />
            <div style={{ width: '78%', height: 6, borderRadius: 3, background: 'rgba(148,163,184,0.15)', marginBottom: 5 }} />
            <div style={{ width: '55%', height: 6, borderRadius: 3, background: 'rgba(148,163,184,0.1)' }} />
          </div>
        </div>
        {/* User */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#6c63ff', borderRadius: '14px 4px 14px 14px', padding: '9px 14px', maxWidth: '58%' }}>
            <div style={{ width: 106, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.5)' }} />
          </div>
        </div>
        {/* Typing */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.22)', flexShrink: 0 }} />
          <div style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '4px 14px 14px 14px', padding: '10px 14px', display: 'flex', gap: 5, alignItems: 'center' }}>
            <div className={styles.typingDot} />
            <div className={styles.typingDot} style={{ animationDelay: '0.2s' }} />
            <div className={styles.typingDot} style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div style={{ margin: '0 16px 14px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 34, borderRadius: 9, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
          <div style={{ width: 160, height: 6, borderRadius: 3, background: 'rgba(148,163,184,0.12)' }} />
        </div>
        <div style={{ width: 34, height: 34, borderRadius: 9, background: '#6c63ff', flexShrink: 0, boxShadow: '0 0 14px rgba(108,99,255,0.45)' }} />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Projects</div>
        <h2 className={styles.heading}>
          AI Tools Built for<br />
          <span className={styles.accent}>Real HR Problems</span>
        </h2>

        <div className={styles.cardsStack}>

          {/* ── HR Policy Chatbot ── */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  Live
                </div>
                <div className={styles.cardCategory}>AI &bull; HR Technology</div>
              </div>
              <a
                href="https://hr-chatbot-omega.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.extLink}
                aria-label="Open HR Policy Chatbot"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>

            <h3 className={styles.cardTitle}>HR Policy Chatbot</h3>
            <p className={styles.cardDesc}>
              An AI-powered chatbot that answers employee policy questions in real time using
              Retrieval-Augmented Generation (RAG) architecture. Employees get instant, accurate
              answers to HR questions — reducing ticket volume and freeing up the HR team for
              higher-value work.
            </p>

            <div className={styles.tags}>
              {chatbotTags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.previewWrap}>
              <BrowserChrome url="hr-chatbot-omega.vercel.app" />
              <ChatbotPreviewScreen />
            </div>

            <a
              href="https://hr-chatbot-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Try Live Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <div className={styles.cardFooter}>
              <div className={styles.architecture}>
                <div className={styles.archStep}><span className={styles.archIcon}>&#128196;</span>Policy Docs</div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}><span className={styles.archIcon}>&#128200;</span>Vector Store</div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}><span className={styles.archIcon}>&#129302;</span>Claude API</div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}><span className={styles.archIcon}>&#128172;</span>Answer</div>
              </div>
            </div>
          </div>

          {/* ── HR Metrics Dashboard ── */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardMeta}>
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot} />
                  Live
                </div>
                <div className={styles.cardCategory}>AI &bull; HR Analytics</div>
              </div>
              <a
                href="https://hr-metrics-dashboard-af46zxhxs-donavan-jax-thegenus-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.extLink}
                aria-label="Open HR Metrics Dashboard"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>

            <h3 className={styles.cardTitle}>HR Metrics Dashboard</h3>
            <p className={styles.cardDesc}>
              An enterprise-grade people analytics dashboard that visualizes key HR metrics including
              turnover, retention, time-to-fill, and employee satisfaction. Features an AI Insights
              panel powered by the Claude API with two views — Plain English for any manager or
              business leader, and HR Professional for people analytics practitioners — plus hover
              tooltips and a terminology guide that makes complex metrics accessible to any audience.
            </p>

            <div className={styles.tags}>
              {dashboardTags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.previewWrap}>
              <BrowserChrome url="hr-metrics-dashboard...vercel.app" />
              <DashboardPreviewScreen />
            </div>

            <a
              href="https://hr-metrics-dashboard-af46zxhxs-donavan-jax-thegenus-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              View Live Dashboard
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <div className={styles.cardFooter}>
              <div className={styles.architecture}>
                <div className={styles.archStep}><span className={styles.archIcon}>&#128202;</span>HR Data</div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}><span className={styles.archIcon}>&#9883;&#65039;</span>React + Recharts</div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}><span className={styles.archIcon}>&#129302;</span>Claude API</div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}><span className={styles.archIcon}>&#128161;</span>AI Insights</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
