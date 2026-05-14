import styles from './About.module.css'

const skills = [
  { label: 'Domain', text: 'HR Operations' },
  { label: 'Technology', text: 'AI-assisted tool building using the Anthropic Claude API' },
  { label: 'Approach', text: 'Proactive learner — always upskilling, always experimenting' },
  { label: 'Focus', text: 'Practical solutions that save time and reduce friction' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>About Me</p>
        <h2 className={styles.heading}>
          HR Professional.<br />
          <em>AI Enthusiast.</em>
        </h2>

        <div className={styles.bio}>
          <p>
            I&apos;m Donavan Jax Thegenus, a Human Resources professional who became genuinely obsessed
            with what AI can do for the world of HR.
          </p>
          <p>
            My background is in HR operations. What drives me right now is the intersection of
            people strategy and emerging technology. I&apos;m not a developer. I don&apos;t have a coding
            background. What I do have is curiosity, a willingness to learn, and a habit of asking
            &ldquo;what if this could be automated?&rdquo; every time I see a repetitive HR process.
          </p>
          <p>
            Tools like Claude Code have allowed me to go from idea to working product without writing
            a single line of code myself. I think that&apos;s exactly the kind of resourcefulness modern
            HR teams need. The projects on this page are proof that you don&apos;t need to be a
            technologist to think like one.
          </p>
          <p>
            At the end of the day, I am in HR because I genuinely care about people. The curiosity
            about AI, the tools I build, the systems I improve, all of it is in service of one thing:
            creating workplaces where employees feel supported, valued, and like someone is truly in
            their corner.
          </p>

          <div className={styles.skills}>
            {skills.map((s, i) => (
              <div key={i} className={styles.skillRow}>
                <span className={styles.skillLabel}>{s.label}</span>
                <span className={styles.skillText}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
