import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>HR Technology &amp; AI Innovation</p>

        <h1 className={styles.name}>
          Donavan Jax<br />
          <em>Thegenus</em>
        </h1>

        <p className={styles.title}>Human Resources Professional</p>

        <p className={styles.tagline}>
          Building smarter HR systems through curiosity, AI,<br />
          and a refusal to stop learning.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Get In Touch
          </a>
          <a href="/ThegenusResume.pdf" download className={styles.btnOutline}>
            Download Resume
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>AI-Powered</span>
            <span className={styles.statLabel}>HR Solutions</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Real-World</span>
            <span className={styles.statLabel}>Impact</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Modern</span>
            <span className={styles.statLabel}>Tools &amp; Workflows</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
