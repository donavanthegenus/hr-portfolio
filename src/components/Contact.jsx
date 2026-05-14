import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.sectionLabel}>Get In Touch</p>
        <h2 className={styles.heading}>
          <em>Let&apos;s Talk</em>
        </h2>

        <p className={styles.sub}>
          I&apos;m always open to a good conversation — whether that&apos;s about HR, AI,
          the future of work, or an opportunity you think might be a fit. Currently
          open to new roles and collaborations.
        </p>

        <div className={styles.actions}>
          <a href="mailto:donavan.thegenus@gmail.com" className={styles.btnWhite}>
            donavan.thegenus@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/donavanthegenus/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnTeal}
          >
            LinkedIn Profile
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
