import styles from './Philosophy.module.css'

export default function Philosophy() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.photo}>
          <img src="/Headshot.PNG" alt="Donavan Jax Thegenus" className={styles.headshot} />
        </div>
        <div className={styles.text}>
          <p className={styles.sectionLabel}>Philosophy</p>
          <blockquote className={styles.quote}>
            I got into HR because I believe work should be somewhere people actually want to show up.
            Not just tolerate. Not just survive. Actually want to be. Every policy I have written,
            every conversation I have had, every tool I have built has been in service of that belief.
            HR done right changes the daily, lived experience of real people. That is what gets me up
            in the morning.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
