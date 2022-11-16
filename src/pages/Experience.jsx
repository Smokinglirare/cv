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
            <span className={styles.icons}><AiFillPhone /> <span className={styles.number}>+46 709 509 387</span></span>
            <div className={styles.border}></div>
            <span className={styles.icons}><ImEarth/> <span className={styles.number2}>Sebastian.thorneus@gmail.com</span><a href="http://stportfolio.netlify.app" className={styles.number2}>Stportfolio.netlify.app</a></span>
            <div className={styles.border}></div>
            <span className={styles.icons}><GiPositionMarker /> <span className={styles.number}>Spannvägen 11 16835 Bromma</span></span>
            <div className={styles.border}></div>
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
            <p className={styles.bread}>
Frontend utbildning med fokus på Javascript och ReactJS, men också en tre månaders kurs inom backend och NodeJS. Gått kurser inom UI och UX design samt projektmetodik, men även digital marknadsföring, versionshantering och webbpublicering.
<br></br>
<br></br>
Följande kurser har jag gått än så länge:
<br></br>
<br></br>
Frontend-programmering <strong>80 YHP</strong>
<br></br>
Webb- och mobilapplikationsutveckling <strong>80 YHP</strong>
<br></br>
Javascript-ramverk <strong>50 YHP</strong>
<br></br>
Webbserver och databaser <strong>50 YHP</strong>
<br></br>
Versionshantering <strong>10 YHP</strong>
<br></br>
Webbpublicering <strong>10 YHP</strong>
<br></br>
UX, Design och Layout <strong>10 YHP</strong>
<br></br>
Projektmetodik inom IT <strong>10 YHP</strong>
<br></br>
Digital marknadsföring <strong>10 YHP</strong>
</p>
            </div>  
        <div className={styles.experience}><h1 className={styles.experienceText}>Erfarenhet</h1></div>
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
            <p className={styles.bread}>Arbetat på Postnords pakethantering i Kiruna där jag framför allt kört ut större paket i lastbil som de mindre brevbilarna inte klarat av. En tjänst där arbetsdagen börjar 0430 med lagerarbete fram till 0800 och sedan utkörningar resten av dagen till allt från privatpersoner ute i byarna till affärer inne i Kiruna. </p>
            </div>  
       
            <div className={styles.border}></div>  
        <div className={styles.navbar}>        <Navbar /></div>
    </div>
  )
}

export default experience