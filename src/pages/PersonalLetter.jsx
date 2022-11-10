import React from 'react'
import styles from "./Home.module.css"
import {TbOctagon, TbBrandNextjs} from "react-icons/tb"
import {SiJavascript, SiReact, SiCss3} from "react-icons/si"
import {FaNodeJs, FaGitSquare} from "react-icons/fa"
import profile from "../images/profile.jpg"
import Experience from './Experience'
import Navbar from '../components/Navbar'
import Personal from './Personal'

function PersonalLetter() {
  return (
    <div className={styles.container}>
        <div className={styles.grid}>
        <div className={styles.leftSide}>
        <h1 className={styles.firstName}>Sebastian</h1>
        <h1 className={styles.lastName}>Torneus</h1>
        <span className={styles.octagon}><TbOctagon /><TbOctagon /><TbOctagon /><TbOctagon />
        </span>  <span className={styles.title}>Frontend-utvecklare</span>
        <img className={styles.image} src={profile}></img>
  <h2 className={styles.me}>Om mig</h2>
  <div className={styles.border}></div>
  <p className={styles.bread}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tenetur, corporis at a deserunt cum quis exercitationem necessitatibus nobis laborum molestiae! Repudiandae corrupti ratione sunt facilis optio neque nihil tenetur.</p>
       <div className={styles.icons}><span className={styles.icon}><SiJavascript /></span>
       <span className={styles.icon}><SiReact /></span>
       <span className={styles.icon}><SiCss3 /></span>
       <span className={styles.icon}><TbBrandNextjs /></span>
       <span className={styles.icon}><FaNodeJs /></span>
       <span className={styles.icon}><FaGitSquare /></span>
       </div> 
        </div>

        <div className={styles.rightSide}>
        <Personal />

        </div>

        </div>
    </div>
  )
}

export default PersonalLetter