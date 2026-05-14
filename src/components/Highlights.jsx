import styles from './Highlights.module.css'

const items = [
  {
    emoji: '🏆',
    text: 'Promoted from HR Specialist to HR Generalist at Alvita Care after demonstrating the ability to manage HR at scale for a 2,000+ person workforce.',
  },
  {
    emoji: '📋',
    text: 'Owned the full employee experience — from weekly onboarding of 15–25 new hires to benefits administration, FMLA, and federal compliance — maintaining a 24-hour SLA on 25+ daily inquiries.',
  },
  {
    emoji: '🚀',
    text: 'Launched an early pay access initiative that expanded financial flexibility for field staff and reduced retention friction before pay-related concerns could escalate.',
  },
  {
    emoji: '🎓',
    text: 'Harvard-educated in Industrial-Organizational Psychology — bringing a research-backed understanding of human behavior, motivation, and workplace dynamics to every HR decision.',
  },
  {
    emoji: '🤖',
    text: 'Now building AI-powered HR tools using the Anthropic Claude API — proving that curiosity and a willingness to learn matter more than a coding degree.',
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Highlights</div>
        <h2 className={styles.heading}>
          What I&apos;ve Done.<br />
          <span className={styles.accent}>What I&apos;m Building.</span>
        </h2>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.emoji}>{item.emoji}</div>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
