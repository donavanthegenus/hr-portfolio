import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          DJT<span className={styles.dot}>.</span>
        </div>

        <p className={styles.copy}>
          &copy; {year} Donavan Jax Thegenus. Built with React &amp; the Anthropic Claude API.
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
