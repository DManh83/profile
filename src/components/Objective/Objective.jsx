import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Objective.module.css'

export const Objective = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nguyen Duy Manh</h1>
        <p className={styles.description}>I am a full-stack developer with more than 1 year of experience working with React/Vue and Node.js. Reach out if you'd like to learn more!</p>
        <a href='mailto:dmanh251001@gmail.com' className={styles.contactBtn}>Contact me</a>
      </div>
      <img src={getImageUrl('avatar/avatar.png')} alt='objective' className={styles.avatar} />
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}

