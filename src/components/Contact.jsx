import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Contact</div>
        <h2 className={styles.heading}>
          <span className={styles.accent}>Let&apos;s Talk</span>
        </h2>

        <p className={styles.subheading}>
          I&apos;m always up for a good conversation, whether that&apos;s about HR, AI, the future of work,
          or an idea you&apos;ve been sitting on. I&apos;m currently open to new opportunities and would love
          to connect with people who are just as excited about where HR is heading as I am.
        </p>

        <div className={styles.cards}>
          <a
            href="mailto:donavan.thegenus@gmail.com"
            className={styles.contactCard}
          >
            <div className={styles.contactIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>donavan.thegenus@gmail.com</span>
            </div>
            <div className={styles.contactArrow}>&#8599;</div>
          </a>

          <a
            href="https://www.linkedin.com/in/donavanthegenus/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.contactCard} ${styles.linkedIn}`}
          >
            <div className={styles.contactIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>LinkedIn</span>
              <span className={styles.contactValue}>Connect with me</span>
            </div>
            <div className={styles.contactArrow}>&#8599;</div>
          </a>

        </div>

        <div className={styles.availability}>
          <span className={styles.availDot} />
          Open to new opportunities and collaborations
        </div>
      </div>
    </section>
  )
}
