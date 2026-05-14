import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.glow} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          HR Technology &amp; AI Innovation
        </div>

        <h1 className={styles.name}>
          Donavan Jax<br />
          <span className={styles.nameAccent}>Thegenus</span>
        </h1>

        <p className={styles.title}>Human Resources Professional</p>

        <p className={styles.tagline}>
          Building smarter HR systems through curiosity, AI, and a refusal to stop learning.
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>
            View My Work
          </a>
          <a href="#contact" className={styles.btnPrimary}>
            Get In Touch
          </a>
          <a href="/ThegenusResume.pdf" download className={styles.btnPrimary}>
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
