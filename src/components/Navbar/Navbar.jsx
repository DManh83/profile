import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import styles from './Navbar.module.css'
import { FaX } from 'react-icons/fa6';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaX size={30} />
          ) : (
            <FaBars size={30} />
          )}
        </div>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href="/">
              About
            </a>
          </li>
          <li>
            <a href="/">
              Experience
            </a>
          </li>
          <li>
            <a href="/">
              Projects
            </a>
          </li>
          <li>
            <a href="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

