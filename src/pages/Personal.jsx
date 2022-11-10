import React from 'react'
import styles from "./Personal.module.css"
import {AiFillPhone} from "react-icons/ai"
import {ImEarth} from "react-icons/im"
import {GiPositionMarker} from "react-icons/gi"
import Navbar from '../components/Navbar'

function Personal() {
  return (
    <div className={styles.container}>
    <div className={styles.contactInfo}>
        <span className={styles.icons}><AiFillPhone /> <span className={styles.number}>+46709509387</span></span>
        <div className={styles.border}></div>
        <span className={styles.icons}><ImEarth/> <span className={styles.number}>sebastian.thorneus@gmail.com</span><span className={styles.number}>www.thorneus.dev</span></span>
        <div className={styles.border}></div>
        <span className={styles.icons}><GiPositionMarker /> <span className={styles.number}>Spannvägen 11 16835 Bromma</span></span>
        <div className={styles.border}></div>
    </div>
    <div className={styles.experience}><h1 className={styles.experience}>Personligt brev</h1></div>
    <div className={styles.border}></div>  
    <div className={styles.experienceBox}>
        <p className={styles.bread}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum reprehenderit quo id recusandae quam ea ullam officiis sit ratione, hic nemo porro aliquam eaque rerum veniam illum velit rem. Molestias?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quis aliquid fugit perspiciatis! Totam, sunt. Pariatur quod animi libero minus illum accusantium at, veritatis nam eos ullam nulla? Expedita, nostrum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repellendus debitis earum ratione. Sit eos facilis dignissimos corrupti magni! Velit, facere eligendi? Esse ratione repudiandae, commodi quas repellat illum impedit.</p>
        </div>     
        <div className={styles.border}></div>
    
    <div className={styles.navbar}>        <Navbar /></div>
</div>
  )
}

export default Personal