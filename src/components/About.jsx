import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>About Me</div>
        <h2 className={styles.heading}>
          HR Professional. AI Enthusiast.<br />
          <span className={styles.accent}>Bridging People &amp; Technology. One Tool at a Time.</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.headshotCol}>
            <div className={styles.headshotWrapper}>
              <img src="/Headshot.PNG" alt="Donavan Jax Thegenus" className={styles.headshot} />
            </div>
          </div>

          <div className={styles.bio}>
            <p>
              I&apos;m Donavan Jax Thegenus, a Human Resources professional who became genuinely obsessed
              with what AI can do for the world of HR.
            </p>
            <p>
              My background is in HR operations. What drives me
              right now is the intersection of people strategy and emerging technology. I&apos;m not a
              developer. I don&apos;t have a coding background. What I do have is curiosity, a willingness
              to learn, and a habit of asking &ldquo;what if this could be automated?&rdquo; every time I see a
              repetitive HR process.
            </p>
            <p>
              Tools like Claude Code have allowed me to go from idea to working product without writing
              a single line of code myself. I think that&apos;s exactly the kind of resourcefulness
              modern HR teams need. The projects on this page are proof that you don&apos;t need to be a
              technologist to think like one.
            </p>
            <p>
              I&apos;m constantly exploring what&apos;s new, constantly experimenting, and constantly looking
              for ways to make HR faster, smarter, and more human. Not less.
            </p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>&#9679;</span>
                HR Operations
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>&#9679;</span>
                AI-assisted tool building using the Anthropic Claude API
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>&#9679;</span>
                Proactive learner. Always upskilling, always experimenting
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>&#9679;</span>
                Focused on practical solutions that save time and reduce friction
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
