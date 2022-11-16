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
        <span className={styles.icons}><AiFillPhone /> <span className={styles.number}>+46 709 509 387</span></span>
        <div className={styles.border}></div>
        <span className={styles.icons}><ImEarth/> <span className={styles.number2}>Sebastian.thorneus@gmail.com</span><a href="http://stportfolio.netlify.app" className={styles.number2}>Stportfolio.netlify.app</a></span>
        <div className={styles.border}></div>
        <span className={styles.icons}><GiPositionMarker /> <span className={styles.number}>Spannvägen 11 16835 Bromma</span></span>
        <div className={styles.border}></div>
    </div>
    <div className={styles.experience}><h1 className={styles.experienceText}>Personligt brev</h1></div>
    <div className={styles.border}></div>  
    <div className={styles.experienceBox}>
        <p className={styles.bread}>
        Mitt namn är Sebastian Torneus och jag går just nu utbildningen Frontend /App Developer hos Changemaker Educations. Jag är 32 år gammal och har under större delen av mitt arbetsliv kört lastbil för Home2you i Stockholm. Senaste åren har jag bott en del i Jukkasjärvi där jag renoverat hus som gått i arv och startat upp en uthyrningsverksamhet där jag bland annat hyr ut hus till ishotellet i Jukkasjärvi. Periodvis när jag bott i Jukkasjärvi har jag även arbetat för Postnord i Kiruna, på deras avdelning för pakethantering som är separerad från brevbärar-avdelningen.
<br></br>
<br></br>
För 1,5 år sedan påbörjade jag utbildningen Frontend/App developer för att jag var intresserad av att byta bransch och testa på något nytt. Av den anledningen är jag just nu ute efter en LIA plats. Jag har under utbildningen gått dessa kurser:
<br></br>


</p>

        </div>     
        <div className={styles.border}></div>
    
    <div className={styles.navbar}>        <Navbar /></div>
</div>
  )
}

export default Personal