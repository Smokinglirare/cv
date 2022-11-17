import React, { useState } from 'react'
import styles from "./Home.module.css"
import {TbOctagon} from "react-icons/tb"
import {SiJavascript, SiReact, SiCss3, SiTypescript} from "react-icons/si"
import {FaNodeJs, FaGitSquare} from "react-icons/fa"
import profile from "../images/Sebbe2.png"
import Experience from './Experience'

function useHover() {
  const [hovering, setHovering] = useState(false)
  const onHoverProps = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  }
  return [hovering, onHoverProps]
}

function Home() {

const [buttonAIsHovering, buttonAHoverProps] = useHover()


  return (
    <div className={styles.container}>
        <div className={styles.grid}>
        <div className={styles.leftSide}>
        <h1 className={styles.firstName}>Sebastian</h1>
        <h1 className={styles.lastName}>Torneus</h1>
        <span className={styles.octagon}><TbOctagon /><TbOctagon /><TbOctagon /><TbOctagon />
        </span>  <span className={styles.title}>Frontend-utvecklare</span>
       <div className={styles.imageDiv}> <img alt="profil" className={styles.image} src={profile}></img></div>
  <h2 className={styles.me}>Om mig</h2>
  <div className={styles.border}></div>
  <p className={styles.bread}>Jag är en engagerad och prestigelös person som just nu utbildar mig inom frontend-utveckling och senaste åren lärt mig UI och UX design. Jag har arbetat mycket med CSS och Javascript, framför allt på slutet mycket i ReactJS. Jag gillar att grotta ner mig i detaljer och lära mig nya saker. </p>
       <div className={styles.icons}><span className={styles.icon} {...buttonAHoverProps}><SiJavascript />{buttonAIsHovering ? <span className={styles.iconText}>70%</span> : <span className={styles.iconText}>JS</span>} </span>
       <span className={styles.icon} {...buttonAHoverProps}><SiReact />{buttonAIsHovering ? <span className={styles.iconText}>70%</span> : <span className={styles.iconText}>React</span>}</span>
       <span className={styles.icon} {...buttonAHoverProps}><SiCss3 />{buttonAIsHovering ? <span className={styles.iconText}>80%</span> : <span className={styles.iconText}>CSS</span>}</span>
       <span className={styles.icon} {...buttonAHoverProps}><SiTypescript />{buttonAIsHovering ? <span className={styles.iconText}>60%</span> : <span className={styles.iconText}>TS</span>}</span>
       <span className={styles.icon} {...buttonAHoverProps}><FaNodeJs />{buttonAIsHovering ? <span className={styles.iconText}>60%</span> : <span className={styles.iconText}>Node</span>}</span>
       <span className={styles.icon} {...buttonAHoverProps}><FaGitSquare />{buttonAIsHovering ? <span className={styles.iconText}>80%</span> : <span className={styles.iconText}>Git</span>}</span>
       </div> 
        </div>

        <div className={styles.rightSide}>
        <Experience />

        </div>

        </div>
    </div>
  )
}

export default Home