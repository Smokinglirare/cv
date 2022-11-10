import React from 'react'
import styles from "./Experience.module.css"
import {AiFillPhone} from "react-icons/ai"

function experience() {
  return (
    <div>
        <div className={styles.contactInfo}>
            <span className={styles.icons}><AiFillPhone /> <span className={styles.number}>+46709509387</span></span>

        </div>
        <div className={styles.experience}>experience</div>
        <div className={styles.education}>education</div>
        <div className={styles.navbar}>Navbar</div>
    </div>
  )
}

export default experience