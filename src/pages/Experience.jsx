import React from 'react'
import styles from "./Experience.module.css"
import {AiFillPhone} from "react-icons/ai"
import {ImEarth} from "react-icons/im"
import {GiPositionMarker} from "react-icons/gi"
import Navbar from '../components/Navbar'

function experience() {
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
        <div className={styles.experience}><h1 className={styles.experience}>Erfarenhet</h1></div>
        <div className={styles.border}></div>  
        <div className={styles.experienceBox}>
            <h2 className={styles.title}>Lastbilschaufför - Home2You</h2>
            <h3 className={styles.time}>2009 - 2019</h3>
            <h4 className={styles.place}>Stockholm</h4>
            <p className={styles.bread}>Arbetat med det mesta hos Home2you. Kört matvaror för diverse olika stora grossister som Martin&Servera, Svensk cater med leveranser till restauranger, men även olika uppdrag som att köra matkassar till privatpersoner för Citygross, köra ut färdigmat som tårtor till cafeer åt företaget Flavy, köra färdiga wraps för företaget Wrapsons till alla möjliga typer av matbutiker som Ica exempelvis.</p>
            </div>     
            <div className={styles.experienceBox}>
            <h2 className={styles.title}>Lastbilschaufför - Postnord</h2>
            <h3 className={styles.time}>2021 - 2022</h3>
            <h4 className={styles.place}>Kiruna</h4>
            <p className={styles.bread}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis culpa unde minus tempora commodi accusamus vero harum deleniti autem! Commodi, et? Accusantium perferendis itaque perspiciatis eveniet pariatur ipsam, quam harum.</p>
            </div>  
        <div className={styles.education}>Utbildning</div>
        <div className={styles.border}></div>  
        <div className={styles.experienceBox}>
            <h2 className={styles.title}>Slutbetyg gymnasiet</h2>
            <h3 className={styles.timeStop}>2008 - 2020</h3>
            
            </div>  
            <div className={styles.experienceBox}>
            <h2 className={styles.title}>Frontend developer - Changemaker Educations</h2>
            <h3 className={styles.time}>2021 - 2022</h3>
            <p className={styles.bread}>Dynamisk frontend-utveckling, apputveckling, mobile first, responsiv design och UX-design utvecklas i högt tempo och är därför ledord i denna utbildning. Digitala strategier och agil projektmetodik är även viktiga framgångsfaktorer. Vill du vara med och utveckla dagens och framtidens hemsidor och appar?</p>
            </div>  
            <div className={styles.border}></div>  
        <div className={styles.navbar}>        <Navbar /></div>
    </div>
  )
}

export default experience