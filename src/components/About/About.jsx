import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              I am a frontend developer with experience in building responsive and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimized backend systems and APIs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
