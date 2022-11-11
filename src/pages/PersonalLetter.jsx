import React from 'react'
import styles from "./Home.module.css"
import {TbOctagon, TbBrandNextjs} from "react-icons/tb"
import {SiJavascript, SiReact, SiCss3, SiTypescript} from "react-icons/si"
import {FaNodeJs, FaGitSquare} from "react-icons/fa"
import profile from "../images/Sebbe2.png"
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
  <p className={styles.bread}>Jag är en engagerad och prestigelös person som just nu utbildar mig inom frontend-utveckling som senaste åren lärt mig UI och UX design. Arbetat mycket med CSS och Javascript, framför allt på slutet mycket i ReactJS. Gillar att grotta ner mig i detaljer och lära mig nya saker. </p>
       <div className={styles.icons}><span className={styles.icon}><SiJavascript /></span>
       <span className={styles.icon}><SiReact /></span>
       <span className={styles.icon}><SiCss3 /></span>
       <span className={styles.icon}><SiTypescript /></span>
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