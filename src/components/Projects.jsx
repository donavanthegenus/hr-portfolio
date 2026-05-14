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
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: '#999' }}>
          <rect x="3" y="11" width="18" height="11" rx="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <span>{url}</span>
      </div>
    </div>
  )
}

function DashboardPreviewScreen() {
  const kpis = [
    { label: 'Turnover Rate', val: '8.4%', color: '#1f6f5f' },
    { label: 'Retention', val: '91.6%', color: '#2fa084' },
    { label: 'Time-to-Fill', val: '27d', color: '#1f6f5f' },
    { label: 'Satisfaction', val: '7.8/10', color: '#2fa084' },
    { label: 'Headcount', val: '1,247', color: '#1f6f5f' },
    { label: 'eNPS', val: '+32', color: '#2fa084' },
  ]
  const bars = [
    { h: 38, c: '#2fa084' }, { h: 52, c: '#6fcf97' }, { h: 30, c: '#2fa084' },
    { h: 47, c: '#6fcf97' }, { h: 40, c: '#2fa084' }, { h: 56, c: '#6fcf97' },
  ]
  return (
    <div className={styles.previewScreen} style={{ background: '#f7f7f7' }}>
      <div style={{ height: 36, background: '#eeeeee', borderBottom: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 10 }}>
        <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2fa084', flexShrink: 0 }} />
        <div style={{ width: 100, height: 5, borderRadius: 2, background: 'rgba(0,0,0,0.12)' }} />
        <div style={{ flex: 1 }} />
        <div style={{ width: 50, height: 18, background: '#eeeeee', border: '1px solid rgba(0,0,0,0.1)' }} />
        <div style={{ width: 70, height: 18, background: '#eeeeee', border: '1px solid rgba(0,0,0,0.1)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 6, padding: '10px 16px 0' }}>
        {kpis.map(k => (
          <div key={k.label} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', padding: '7px 8px' }}>
            <div style={{ fontSize: 7, color: '#999', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'Inter, sans-serif' }}>{k.label}</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: k.color, fontFamily: 'Inter, sans-serif' }}>{k.val}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 6, padding: '6px 16px' }}>
        <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', padding: '8px 12px' }}>
          <div style={{ width: 100, height: 5, borderRadius: 2, background: 'rgba(0,0,0,0.1)', marginBottom: 8 }} />
          <svg width="100%" height="56" viewBox="0 0 300 56" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dlg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2fa084" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#2fa084" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 40 C25 38 45 46 70 33 S118 18 150 24 S196 37 228 26 S262 11 300 14" fill="none" stroke="#2fa084" strokeWidth="1.5" />
            <path d="M0 40 C25 38 45 46 70 33 S118 18 150 24 S196 37 228 26 S262 11 300 14 L300 56 L0 56 Z" fill="url(#dlg1)" />
          </svg>
        </div>
        <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', padding: '8px 12px' }}>
          <div style={{ width: 70, height: 5, borderRadius: 2, background: 'rgba(0,0,0,0.1)', marginBottom: 8 }} />
          <svg width="100%" height="56" viewBox="0 0 140 56">
            {bars.map((b, i) => (
              <rect key={i} x={i * 21 + 4} y={56 - b.h} width="14" height={b.h} fill={b.c} opacity="0.75" />
            ))}
          </svg>
        </div>
      </div>

      <div style={{ padding: '5px 16px 12px', display: 'flex', gap: 6 }}>
        <div style={{ height: 24, width: 110, background: 'rgba(47,160,132,0.12)', border: '1px solid rgba(47,160,132,0.25)' }} />
        <div style={{ height: 24, width: 78, background: '#eeeeee', border: '1px solid rgba(0,0,0,0.08)' }} />
      </div>
    </div>
  )
}

function ChatbotPreviewScreen() {
  return (
    <div className={styles.previewScreen} style={{ background: '#f7f7f7' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#eeeeee', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ width: 30, height: 30, background: 'rgba(47,160,132,0.12)', border: '1px solid rgba(47,160,132,0.25)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#2fa084">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
        <div>
          <div style={{ width: 76, height: 6, borderRadius: 2, background: 'rgba(0,0,0,0.15)', marginBottom: 5 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#2fa084' }} />
            <div style={{ width: 80, height: 4, borderRadius: 2, background: 'rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>

      <div style={{ padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#1f6f5f', padding: '8px 12px', maxWidth: '70%' }}>
            <div style={{ width: 130, height: 5, background: 'rgba(255,255,255,0.4)', marginBottom: 4 }} />
            <div style={{ width: 80, height: 5, background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 7 }}>
          <div style={{ width: 24, height: 24, background: 'rgba(47,160,132,0.12)', border: '1px solid rgba(47,160,132,0.2)', flexShrink: 0 }} />
          <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', padding: '8px 12px', maxWidth: '80%' }}>
            <div style={{ width: '90%', height: 5, borderRadius: 2, background: 'rgba(0,0,0,0.12)', marginBottom: 4 }} />
            <div style={{ width: '75%', height: 5, borderRadius: 2, background: 'rgba(0,0,0,0.09)', marginBottom: 4 }} />
            <div style={{ width: '52%', height: 5, borderRadius: 2, background: 'rgba(0,0,0,0.06)' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ background: '#1f6f5f', padding: '8px 12px', maxWidth: '56%' }}>
            <div style={{ width: 100, height: 5, background: 'rgba(255,255,255,0.35)' }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
          <div style={{ width: 24, height: 24, background: 'rgba(47,160,132,0.12)', border: '1px solid rgba(47,160,132,0.2)', flexShrink: 0 }} />
          <div style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', padding: '9px 12px', display: 'flex', gap: 4 }}>
            <div className={styles.typingDot} />
            <div className={styles.typingDot} style={{ animationDelay: '0.2s' }} />
            <div className={styles.typingDot} style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>

      <div style={{ margin: '0 14px 12px', display: 'flex', gap: 6 }}>
        <div style={{ flex: 1, height: 30, background: '#fff', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
          <div style={{ width: 140, height: 4, borderRadius: 2, background: 'rgba(0,0,0,0.1)' }} />
        </div>
        <div style={{ width: 30, height: 30, background: '#1f6f5f', flexShrink: 0 }} />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>Projects</p>
        <h2 className={styles.heading}>
          AI Tools Built for<br />
          <em>Real HR Problems</em>
        </h2>

        <div className={styles.cardsStack}>

          {/* ── HR Policy Chatbot ── */}
          <div className={styles.card}>
            <div className={styles.previewWrap}>
              <BrowserChrome url="hr-chatbot-omega.vercel.app" />
              <ChatbotPreviewScreen />
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span className={styles.statusBadge}>Live</span>
                <span className={styles.cardCategory}>AI &bull; HR Technology</span>
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

              <div className={styles.cardFooter}>
                <div className={styles.architecture}>
                  <span className={styles.archStep}>Policy Docs</span>
                  <span className={styles.archArrow}>&#8594;</span>
                  <span className={styles.archStep}>Vector Store</span>
                  <span className={styles.archArrow}>&#8594;</span>
                  <span className={styles.archStep}>Claude API</span>
                  <span className={styles.archArrow}>&#8594;</span>
                  <span className={styles.archStep}>Answer</span>
                </div>
                <a
                  href="https://hr-chatbot-omega.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  View Live Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── HR Metrics Dashboard ── */}
          <div className={styles.card}>
            <div className={styles.previewWrap}>
              <BrowserChrome url="hr-metrics-dashboard...vercel.app" />
              <DashboardPreviewScreen />
            </div>

            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span className={styles.statusBadge}>Live</span>
                <span className={styles.cardCategory}>AI &bull; HR Analytics</span>
              </div>

              <h3 className={styles.cardTitle}>HR Metrics Dashboard</h3>
              <p className={styles.cardDesc}>
                An enterprise-grade people analytics dashboard that visualizes key HR metrics including
                turnover, retention, time-to-fill, and employee satisfaction. Features an AI Insights
                panel powered by the Claude API with two views — Plain English for any manager or
                business leader, and HR Professional for people analytics practitioners.
              </p>

              <div className={styles.tags}>
                {dashboardTags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.architecture}>
                  <span className={styles.archStep}>HR Data</span>
                  <span className={styles.archArrow}>&#8594;</span>
                  <span className={styles.archStep}>React + Recharts</span>
                  <span className={styles.archArrow}>&#8594;</span>
                  <span className={styles.archStep}>Claude API</span>
                  <span className={styles.archArrow}>&#8594;</span>
                  <span className={styles.archStep}>AI Insights</span>
                </div>
                <a
                  href="https://hr-metrics-dashboard-af46zxhxs-donavan-jax-thegenus-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  View Live Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
