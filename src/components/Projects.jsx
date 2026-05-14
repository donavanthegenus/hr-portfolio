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
    { label: 'Turnover Rate', val: '8.4%', color: '#F59E0B' },
    { label: 'Retention', val: '91.6%', color: '#a3a3a3' },
    { label: 'Time-to-Fill', val: '27d', color: '#F59E0B' },
    { label: 'Satisfaction', val: '7.8 / 10', color: '#a3a3a3' },
    { label: 'Headcount', val: '1,247', color: '#F59E0B' },
    { label: 'eNPS Score', val: '+32', color: '#a3a3a3' },
  ]
  const bars = [
    { h: 38, c: '#F59E0B' }, { h: 52, c: '#525252' }, { h: 30, c: '#F59E0B' },
    { h: 47, c: '#525252' }, { h: 40, c: '#F59E0B' }, { h: 56, c: '#525252' },
  ]
  return (
    <div className={styles.previewScreen} style={{ background: '#111111' }}>
      <div style={{ height: 40, background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 18px', gap: 10 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#F59E0B', flexShrink: 0 }} />
        <div style={{ width: 110, height: 6, borderRadius: 2, background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ flex: 1 }} />
        <div style={{ width: 54, height: 20, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
        <div style={{ width: 76, height: 20, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 6, padding: '12px 18px 0' }}>
        {kpis.map(k => (
          <div key={k.label} style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)', padding: '8px 10px' }}>
            <div style={{ fontSize: 8, color: 'rgba(163,163,163,0.5)', marginBottom: 5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'Inter, sans-serif' }}>{k.label}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: k.color, fontFamily: 'Inter, sans-serif' }}>{k.val}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 6, padding: '6px 18px' }}>
        <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)', padding: '10px 14px' }}>
          <div style={{ width: 120, height: 5, borderRadius: 2, background: 'rgba(255,255,255,0.1)', marginBottom: 10 }} />
          <svg width="100%" height="60" viewBox="0 0 320 60" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 44 C25 42 45 50 75 36 S125 20 160 26 S210 40 245 28 S280 12 320 16" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M0 44 C25 42 45 50 75 36 S125 20 160 26 S210 40 245 28 S280 12 320 16 L320 60 L0 60 Z" fill="url(#lg1)" />
          </svg>
        </div>
        <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)', padding: '10px 14px' }}>
          <div style={{ width: 80, height: 5, borderRadius: 2, background: 'rgba(255,255,255,0.1)', marginBottom: 10 }} />
          <svg width="100%" height="60" viewBox="0 0 148 60">
            {bars.map((b, i) => (
              <rect key={i} x={i * 22 + 4} y={60 - b.h} width="14" height={b.h} fill={b.c} opacity="0.7" />
            ))}
          </svg>
        </div>
      </div>

      <div style={{ padding: '6px 18px 14px', display: 'flex', gap: 8 }}>
        <div style={{ height: 26, width: 116, background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)' }} />
        <div style={{ height: 26, width: 84, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }} />
      </div>
    </div>
  )
}

function ChatbotPreviewScreen() {
  return (
    <div className={styles.previewScreen} style={{ background: '#111111' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ width: 32, height: 32, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(245,158,11,0.8)">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
        <div>
          <div style={{ width: 82, height: 6, background: 'rgba(255,255,255,0.2)', marginBottom: 6 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80' }} />
            <div style={{ width: 96, height: 5, background: 'rgba(163,163,163,0.15)' }} />
          </div>
        </div>
      </div>

      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#F59E0B', padding: '9px 14px', maxWidth: '72%' }}>
            <div style={{ width: 138, height: 6, background: 'rgba(0,0,0,0.35)', marginBottom: 5 }} />
            <div style={{ width: 88, height: 6, background: 'rgba(0,0,0,0.25)' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 26, height: 26, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.18)', flexShrink: 0 }} />
          <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)', padding: '9px 14px', maxWidth: '82%' }}>
            <div style={{ width: '92%', height: 6, background: 'rgba(163,163,163,0.2)', marginBottom: 5 }} />
            <div style={{ width: '78%', height: 6, background: 'rgba(163,163,163,0.15)', marginBottom: 5 }} />
            <div style={{ width: '55%', height: 6, background: 'rgba(163,163,163,0.1)' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#F59E0B', padding: '9px 14px', maxWidth: '58%' }}>
            <div style={{ width: 106, height: 6, background: 'rgba(0,0,0,0.3)' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ width: 26, height: 26, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.18)', flexShrink: 0 }} />
          <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)', padding: '10px 14px', display: 'flex', gap: 5, alignItems: 'center' }}>
            <div className={styles.typingDot} />
            <div className={styles.typingDot} style={{ animationDelay: '0.2s' }} />
            <div className={styles.typingDot} style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>

      <div style={{ margin: '0 16px 14px', display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 32, background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', padding: '0 12px' }}>
          <div style={{ width: 160, height: 5, background: 'rgba(163,163,163,0.12)' }} />
        </div>
        <div style={{ width: 32, height: 32, background: '#F59E0B', flexShrink: 0 }} />
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
