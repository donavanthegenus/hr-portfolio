import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>HR Technology &amp; AI Innovation</p>

        <h1 className={styles.heading}>
          Donavan Jax<br />
          <em>Thegenus</em>
        </h1>

        <p className={styles.sub}>
          Human Resources Professional — bridging people strategy<br />
          and emerging technology, one tool at a time.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnWhite}>View My Work</a>
          <a href="#contact" className={styles.btnTeal}>Get In Touch</a>
        </div>
      </div>
    </section>
  )
}
