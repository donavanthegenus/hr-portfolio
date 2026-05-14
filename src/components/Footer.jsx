import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>Donavan Jax Thegenus</span>

        <p className={styles.copy}>
          &copy; {year} &mdash; Built with React &amp; the Anthropic Claude API
        </p>

        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/donavanthegenus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:donavan.thegenus@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
