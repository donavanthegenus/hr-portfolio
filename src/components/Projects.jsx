import styles from './Projects.module.css'

const chatbotTags = ['React', 'Node.js', 'Claude API', 'RAG', 'Vercel']
const dashboardTags = ['React', 'Node.js', 'Recharts', 'Anthropic Claude API']

const messages = [
  { role: 'user', text: 'How many PTO days do I get per year?' },
  {
    role: 'bot',
    text: 'Full-time employees accrue 15 PTO days per year (120 hours). After 3 years of service this increases to 20 days. PTO begins accruing from your first day and can be used after 90 days of employment.',
  },
  { role: 'user', text: 'Can I roll over unused PTO to next year?' },
  {
    role: 'bot',
    text: "Yes — you can roll over up to 5 unused PTO days (40 hours) into the following calendar year. Any balance above that is forfeited on December 31st. You'll receive a reminder email in November with your current balance.",
  },
]

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
          {/* HR Policy Chatbot */}
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

            <div className={styles.chatPreview}>
              <div className={styles.chatHeader}>
                <div className={styles.chatHeaderLeft}>
                  <div className={styles.chatAvatar}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.chatName}>HR Assistant</div>
                    <div className={styles.chatStatus}>
                      <span className={styles.chatOnlineDot} />
                      Powered by Claude
                    </div>
                  </div>
                </div>
                <a
                  href="https://hr-chatbot-omega.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tryLiveBtn}
                >
                  Try Live Demo
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>

              <div className={styles.chatMessages}>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`${styles.message} ${msg.role === 'user' ? styles.messageUser : styles.messageBot}`}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    {msg.role === 'bot' && (
                      <div className={styles.botIcon}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                      </div>
                    )}
                    <div className={styles.messageBubble}>{msg.text}</div>
                  </div>
                ))}

                <div className={styles.typing}>
                  <div className={styles.botIcon}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div className={styles.typingDots}>
                    <span /><span /><span />
                  </div>
                </div>
              </div>

              <div className={styles.chatInput}>
                <div className={styles.chatInputBox}>Ask about PTO, benefits, leave policy…</div>
                <button className={styles.chatSend} aria-label="Send">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.architecture}>
                <div className={styles.archStep}>
                  <span className={styles.archIcon}>&#128196;</span>
                  Policy Docs
                </div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}>
                  <span className={styles.archIcon}>&#128200;</span>
                  Vector Store
                </div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}>
                  <span className={styles.archIcon}>&#129302;</span>
                  Claude API
                </div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}>
                  <span className={styles.archIcon}>&#128172;</span>
                  Answer
                </div>
              </div>
            </div>
          </div>

          {/* HR Metrics Dashboard */}
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

            <div className={styles.iframePreview}>
              <div className={styles.iframeHeader}>
                <div className={styles.chatHeaderLeft}>
                  <div className={styles.chartIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="18" y="3" width="4" height="18" rx="1"/>
                      <rect x="10" y="8" width="4" height="13" rx="1"/>
                      <rect x="2" y="13" width="4" height="8" rx="1"/>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.chatName}>Live Dashboard Preview</div>
                    <div className={styles.chatStatus}>
                      <span className={styles.chatOnlineDot} />
                      Embedded · HR Metrics Dashboard
                    </div>
                  </div>
                </div>
                <a
                  href="https://hr-metrics-dashboard-af46zxhxs-donavan-jax-thegenus-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tryLiveBtn}
                >
                  Open Full View
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
              <iframe
                src="https://hr-metrics-dashboard-af46zxhxs-donavan-jax-thegenus-projects.vercel.app/"
                className={styles.dashboardIframe}
                title="HR Metrics Dashboard"
                loading="lazy"
              />
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.architecture}>
                <div className={styles.archStep}>
                  <span className={styles.archIcon}>&#128202;</span>
                  HR Data
                </div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}>
                  <span className={styles.archIcon}>&#9883;&#65039;</span>
                  React + Recharts
                </div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}>
                  <span className={styles.archIcon}>&#129302;</span>
                  Claude API
                </div>
                <span className={styles.archArrow}>&#8594;</span>
                <div className={styles.archStep}>
                  <span className={styles.archIcon}>&#128161;</span>
                  AI Insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
