import { useState, useEffect, useCallback } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Vanessa Notarte-Mandap',
    title: 'Application Support Specialist | AlayaCare Mobile App Expert',
    quote:
      'Working with Don has truly been a blessing, and I can confidently say he is one of the best HR professionals I\'ve had the privilege to know. He is highly knowledgeable, approachable, and always willing to guide and support others. What sets him apart is his calm and professional way of handling challenges while making people feel heard, valued, and respected. Don is the kind of leader and mentor who creates a lasting impact on both people and organizations. Any company would be fortunate to have him on their HR team. Hiring him would be one of the best decisions they could make.',
  },
  {
    name: 'Gilbert Peñas (Penn Yas)',
    title: 'Your Friend in the Business',
    quote:
      'I had the pleasure of working with Don and he was highly regarded by both peers and leadership. I am confident Don would be a valuable asset to any team.',
  },
  {
    name: 'Vedanti Gosine, PMP',
    title: 'Project Manager',
    quote:
      'I had the pleasure of collaborating with Donavan for a brief period, and I must say that working with him was truly delightful. Donavan is an exceptionally innovative, motivated, and professional individual. His dedication to his work in the HR department is commendable, and his support during my onboarding process was invaluable. In addition to his outstanding qualities, Donavan consistently demonstrates a strong work ethic and a genuine passion for helping others succeed. I highly recommend Donavan for his exceptional skills, unwavering commitment, and overall positive impact on the team.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating || index === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(index)
      setAnimating(false)
    }, 250)
  }, [active, animating])

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((active + 1) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setActive(i => (i + 1) % testimonials.length)
        setAnimating(false)
      }, 250)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[active]

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionLabel}>Social Proof</div>
        <h2 className={styles.heading}>
          What Colleagues<br />
          <span className={styles.accent}>Have to Say</span>
        </h2>

        <div className={styles.carousel}>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className={`${styles.card} ${animating ? styles.fadeOut : styles.fadeIn}`}>
            <div className={styles.quoteMarkTop}>&ldquo;</div>

            <p className={styles.quote}>{t.quote}</p>

            <div className={styles.author}>
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{t.name}</div>
                <div className={styles.authorTitle}>{t.title}</div>
                <div className={styles.linkedInBadge}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Recommendation
                </div>
              </div>
            </div>
          </div>

          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
