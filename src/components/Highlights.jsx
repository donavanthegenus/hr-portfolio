import styles from './Highlights.module.css'

const items = [
  {
    label: 'Promotion',
    text: 'Promoted from HR Specialist to HR Generalist at Alvita Care after demonstrating the ability to manage HR at scale for a 2,000+ person workforce.',
  },
  {
    label: 'Scale',
    text: 'Owned the full employee experience — from weekly onboarding of 15–25 new hires to benefits administration, FMLA, and federal compliance — maintaining a 24-hour SLA on 25+ daily inquiries.',
  },
  {
    label: 'Initiative',
    text: 'Launched an early pay access program that expanded financial flexibility for field staff and reduced retention friction before pay-related concerns could escalate.',
  },
  {
    label: 'Education',
    text: 'Harvard-educated in Industrial-Organizational Psychology — bringing a research-backed understanding of human behavior, motivation, and workplace dynamics to every HR decision.',
  },
  {
    label: 'Innovation',
    text: 'Now building AI-powered HR tools using the Anthropic Claude API — proving that curiosity and a willingness to learn matter more than a coding degree.',
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>Career Highlights</p>
        <h2 className={styles.heading}>
          What I&apos;ve Done.<br />
          <em>What I&apos;m Building.</em>
        </h2>

        <div className={styles.rows}>
          {items.map((item, i) => (
            <div key={i} className={styles.row}>
              <span className={styles.rowLabel}>{item.label}</span>
              <p className={styles.rowText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
